import { useState } from "react";

const habitsData = [
  {
    id: 1,
    title: "Reading",
    is_done: false,
    streak: 2,
    created_at: "2026-06-21",
  },
  {
    id: 2,
    title: "Drinking 2l of water",
    is_done: true,
    streak: 7,
    created_at: "2026-06-21",
  },
  {
    id: 3,
    title: "Practicing in programming",
    is_done: false,
    streak: 0,
    created_at: "2026-06-21",
  },
];

export function useHabits() {
  const [habits, setHabits] = useState(habitsData);

  function addHabit(title) {
    setHabits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title,
        is_done: false,
        streak: 0,
        created_at: Date.now(),
      },
    ]);
  }

  function toggleHabit(id) {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              is_done: !habit.is_done,
              streak: Math.max(0, habit.streak + (!habit.is_done ? 1 : -1)),
            }
          : habit,
      ),
    );
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

  const doneCount = habits.filter((habit) => habit.is_done).length;

  return {
    habits,
    addHabit,
    toggleHabit,
    deleteHabit,
    doneCount,
    totalCount: habits.length,
  };
}
