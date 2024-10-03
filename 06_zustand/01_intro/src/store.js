import { create } from "zustand";

// zustand : 부분 상태 업데이트 지원 / 상태를 바꿀 것만 쓰면 됨.

const useStore = create((set) => ({
    count: 0, // 상태로 사용할 값.

    increment: () => set((state) => ({ count: state.count + 1 })), // state는 현재 내부상태
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export default useStore;
