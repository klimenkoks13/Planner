import { useState, useEffect } from "react";
import { getTasks } from "../api/tasksApi";
// const tasksData = [
//   {
//     id: 1,
//     title: "Go to the gym",
//     is_done: false,
//     date_key: "2026-06-21",
//     created_at: "2026-06-21",
//   },
//   {
//     id: 2,
//     title: "English lesson",
//     is_done: true,
//     date_key: "2026-06-21",
//     created_at: "2026-06-21",
//   },
// ];

export function useTasks(dateKey) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    getTasks(dateKey, controller.signal)
      .then(setTasks)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [dateKey]);

  function addTask(title) {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title,
        is_done: false,
        date_key: dateKey,
        created_at: Date.now(),
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, is_done: !task.is_done } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const doneCount = tasks.filter((task) => task.is_done).length;

  return {
    tasks,
    isLoading,
    error,
    addTask,
    toggleTask,
    deleteTask,
    doneCount,
    totalCount: tasks.length,
  };
}
