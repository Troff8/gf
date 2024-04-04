"use client";
import React from "react";
import styles from "./reportsCreateForm.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input/input";
import clsx from "clsx";
import { ModalEvent, dispatchModalEvent } from "@/utils/dispatchModal";
import { CreateReport, createReportSchema } from "@/schema/report";

const ReportsCreateForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<CreateReport>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(createReportSchema),
  });

  const onSubmit: SubmitHandler<CreateReport> = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        href: window.location.href,
      }),
    });
    if (res) {
      dispatchModalEvent(ModalEvent.ReportCreateModal)();
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formContent}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              register={register}
              label="Title"
              id="title"
              errors={errors}
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input
              register={register}
              label="Description"
              id="description"
              errors={errors}
              type="text"
              textArea={{ rows: 5, cols: 10 }}
              height={200}
              {...field}
            />
          )}
        />
        <div className={styles.buttons}>
          <button
            type="button"
            className={clsx(styles.button, styles.cancel)}
            onClick={dispatchModalEvent(ModalEvent.ReportCreateModal)}
          >
            Cancel
          </button>
          <button type="submit" className={clsx(styles.button, styles.send)}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportsCreateForm;
