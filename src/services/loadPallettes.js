  import { getUser } from './user';
  import { getUserPallets } from './palletssaved';
  import { deletePalette } from '../services/delete';
  import { updatePalette } from '../services/update';

  export async function loadPalettes() {
    const user = await getUser();
    const container = document.getElementById('palettesContainer');
    container.innerHTML = '';
    if (!user || !container) return;
    const palettes = await getUserPallets(user);

    container.innerHTML = palettes.map((palette) => `
      <div class="bg-(--color-light)/80 rounded-2xl p-4 shadow-md">
        
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-lg font-semibold">
            ${palette.name}
          </h3>

          <div class="flex items-center gap-2">

            <button
              class="update-palette-button cursor-pointer px-4 py-2 rounded-full bg-(--color-main) text-(--color-light) text-sm font-medium hover:scale-[1.03] active:scale-95 transition"
              data-id="${palette.id}"
            >
              Update
            </button>

            <button
              class="delete-palette-button cursor-pointer px-4 py-2 rounded-full bg-(--color-dark-accent) text-(--color-light) text-sm font-medium hover:scale-[1.03] active:scale-95 transition"
              data-id="${palette.id}"
            >
              Delete
            </button>

          </div>
        </div>

        <div class="grid grid-cols-5 gap-2">
          ${palette.colors.map((color) => `
            <div
              class="h-20 rounded-xl flex items-end justify-center pb-2"
              style="background-color: ${color}"
            >
              <span class="text-[11px] bg-(--color-light)/70 text-(--color-dark) px-2 py-1 rounded-full">
                ${color}
              </span>
            </div>
          `).join('')}
        </div>

      </div>
`).join('');
  const deleteButtons = document.querySelectorAll('.delete-palette-button');

  deleteButtons.forEach((button) => {

    button.addEventListener('click', async () => {
      const id = button.getAttribute('data-id');

      const { error } = await deletePalette(id);

      if (error) {
        console.error(error);
        return;
      }

      // Recargar palettes
      loadPalettes();

    });

  });
  const updateButtons = document.querySelectorAll('.update-palette-button');

  updateButtons.forEach((button) => {

    button.addEventListener('click', async () => {
      const hexElements = document.querySelectorAll(".hex");
      const currentColors = [];
      hexElements.forEach((element) => { currentColors.push(element.textContent.trim()); });
      const id = button.getAttribute('data-id');
      const { error } = await updatePalette(id, { colors: currentColors });

      if (error) {
        console.error(error);
        return;
      }
      loadPalettes();

    });

  });
}