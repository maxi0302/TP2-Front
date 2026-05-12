export const prerender = false;

function rgbToHex(rgb) {
  return (
    "#" +
    rgb
      .map((value) =>
        Math.max(0, Math.min(255, value))
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
      .toUpperCase()
  );
}

export async function POST({ request }) {
  try {
    const rawBody = await request.text();
    const body = JSON.parse(rawBody);

    const input = Array.isArray(body.input)
      ? body.input
      : ["N", "N", "N", "N", "N"];

    const lockedIndexes = input
      .map((item, index) => (item !== "N" ? index : null))
      .filter((index) => index !== null);

    const response = await fetch("http://colormind.io/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "ui",
        input,
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Error consultando Colormind" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await response.json();

    const colors = data.result.map((rgb) => rgbToHex(rgb));

    // Mantener exactamente iguales los colores bloqueados
    lockedIndexes.forEach((index) => {
      const originalRgb = input[index];
      colors[index] = rgbToHex(originalRgb);
    });

    return new Response(JSON.stringify({ colors }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("ERROR EN /api/palette:", error);

    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}