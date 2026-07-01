import { ref } from 'vue';

export function useActiveItem<T>() {
    const activeItem = ref<T | null>(null);

    function openItem(item?: T) {
        if (item) {
            activeItem.value = item;
        }
    }

    function closeItem() {
        activeItem.value = null;
    }

    return {
        activeItem,
        openItem,
        closeItem,
    };
}