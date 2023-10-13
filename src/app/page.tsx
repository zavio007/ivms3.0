"use client"
import Image from "next/image";
import styles from "./style.module.scss";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);
  return null
}
