import { Router } from "express";
import { pool } from "./db.js";

const DEMO_USER_ID = "00000000-0000-0000-0000-000000000001";
const router = Router();

router.get("/", async (req, res) => {
  const { date } = req.query;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? "")) {
    return res.status(400).json({ message: "date must be YYYY-MM-DD" });
  }

  try {
    const { rows } = await pool.query(
      `SELECT id, title, is_done, date_key::text AS date_key
         FROM tasks
        WHERE user_id = $1 AND date_key = $2
        ORDER BY position, created_at`,
      [DEMO_USER_ID, date],
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
