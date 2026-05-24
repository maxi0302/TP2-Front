  import { getUser } from './user';
  import { getUserPallets } from './palletssaved';

  export async function loadPalettes() {
    const user = await getUser();
    const container = document.getElementById('palettesContainer');
    if (!user || !container) return;

    const palettes = await getUserPallets(user);

    container.innerHTML = palettes.map((palette) => `
      <div class="bg-white/80 rounded-2xl p-4 shadow-md backdrop-blur-sm">
        <h3 class="mb-3 text-lg font-semibold">${palette.name}</h3>

        <div class="grid grid-cols-5 gap-2">
          ${palette.colors.map((color) => `
            <div
              class="h-20 rounded-xl flex items-end justify-center pb-2"
              style="background-color: ${color}"
            >
              <span class="text-[11px] bg-white/70 text-black px-2 py-1 rounded-full">
                ${color}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }