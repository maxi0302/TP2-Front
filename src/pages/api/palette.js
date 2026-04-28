export const prerender = false;

export async function POST({ request }) {
  try {
    const rawBody = await request.text();
    const body = JSON.parse(rawBody);

    const color = typeof body.color === "string" ? body.color : "#FFFFFF";

    const hexToRgb = (hex) => {
      const clean = hex.replace("#", "");
      return [
        parseInt(clean.slice(0, 2), 16),
        parseInt(clean.slice(2, 4), 16),
        parseInt(clean.slice(4, 6), 16),
      ];
    };

    const rgbToHex = (rgb) => {
      return (
        "#" +
        rgb
          .map((v) =>
            Math.max(0, Math.min(255, v))
              .toString(16)
              .padStart(2, "0")
          )
          .join("")
          .toUpperCase()
      );
    };

    const baseRgb = hexToRgb(color);

    const response = await fetch("http://colormind.io/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "ui",
        input: ["N", "N", baseRgb, "N", "N"],
      }),
    });

    const data = await response.json();

    const colors = data.result.map((rgb) => rgbToHex(rgb));

    colors[2] = color.toUpperCase();

    return new Response(JSON.stringify({ colors }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("ERROR:", error);

    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}