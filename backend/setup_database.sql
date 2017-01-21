CREATE TABLE account (
  email TEXT NOT NULL,
  password TEXT NOT NULL,
);
CREATE TABLE places (
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  pref TEXT NOT NULL,
  money TEXT NOT NULL,
  time TEXT NOT NULL,
  history TEXT NOT NULL
);
CREATE TABLE ratings (
  email TEXT NOT NULL,
  rating INTEGER NOT NULL,
  places TEXT NOT NULL,
  comment TEXT NOT NULL,
);
CREATE TABLE all_trips (
  id INTEGER PRIMARY KEY autoincrement,
  places TEXT NOT NULL,
);
