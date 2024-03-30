import styles from "./reportsCreateForm.module.css";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Input } from "../input/input";
import clsx from "clsx";
import { ModalEvent, dispatchModalEvent } from "@/utils/dispatchModal";

const ReportsCreateForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await fetch("http://localhost:3000/api/report", {
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
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formContent}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
            minLength: 3,
            maxLength: 30,
          }}
          render={({ field }) => (
            <Input
              label="Title"
              register={register}
              id={"title"}
              errors={errors}
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{
            required: true,
            minLength: 3,
            maxLength: 200,
          }}
          render={({ field }) => (
            <Input
              register={register}
              label="Decsription"
              id={"decsription"}
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
            className={clsx(`
                    ${styles.button}
                    ${styles.cancel}
                `)}
            onClick={dispatchModalEvent(ModalEvent.ReportCreateModal)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={clsx(`
                    ${styles.button}
                    ${styles.send}
                `)}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportsCreateForm;
