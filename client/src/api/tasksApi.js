export async function getTasks(dateKey) {
  const res = await fetch(`/api/tasks?date=${dateKey}`);
  if (!res.ok) throw new Error("Failed to load tasks");
  return res.json();
}
