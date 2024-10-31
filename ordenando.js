// Função Bubble Sort
const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
            }
        }
    }
};

// Função Selection Sort
const selection_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
    }
};

// Função Quick Sort
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return;
    const pivot = arr[Math.floor((left + right) / 2)];
    const index = partition(arr, left, right, pivot);
    quick_sort(arr, left, index - 1);
    quick_sort(arr, index, right);
};

// Função de Partição para Quick Sort
const partition = (arr, left, right, pivot) => {
    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
};

// Função Shuffle para embaralhar os valores
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
};
