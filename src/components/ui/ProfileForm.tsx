"use client";
import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

export const ProfileForm = () => {
  const [username, setUsername] = useState("");

  const handleSave = () => {
    alert(`ユーザー名「${username}」が保存されました！`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <MdOutlineAccountCircle size={200} color="#B0B0B0" />
        <p style={styles.iconLabel}>アイコンを編集</p>
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.label}>
          ユーザー名
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名"
          style={styles.input}
        />
      </div>

      <button onClick={handleSave} style={styles.saveButton}>
        保存する
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center" as "center",
    backgroundColor: "#FAF9F6",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  iconLabel: {
    color: "#555",
    marginTop: "8px",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left" as "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold" as "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  saveButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProfileForm;
