import React from "react";
import styles from "./styles/card.module.scss";
import { formatPhone } from "../../../helpers/phoneFormatter";

export function UserCard({ data }) {
  const { name, email, phone, photo, position } = data;

  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img src={photo || "./assets/icons/defaultAvatar.svg"} alt="photo" />
      </div>
      <div data-tip={name} className={styles.nameContainer}>
        <span>{name}</span>
      </div>
      <div className={styles.info}>
        <div data-tip={position} className={styles.position}>
          <span>{position}</span>
        </div>
        <div data-tip={email} className={styles.email}>
          <span>{email}</span>
        </div>
        <div data-tip={phone} className={styles.phone}>
          <span>{formatPhone(phone)}</span>
        </div>
      </div>
    </div>
  );
}
