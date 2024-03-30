import styles from "./settingsCreateForm.module.css";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Input } from "../input/input";
import clsx from "clsx";
import { ModalEvent, dispatchModalEvent } from "@/utils/dispatchModal";

const SettingsCreateForm: React.FC = () => {
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
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatchModalEvent(ModalEvent.SettingsCreateModal)();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formContent}>
        <Controller
          name="link"
          control={control}
          rules={
            {
              // required: true, FIXME
              // maxLength: 30,
            }
          }
          render={({ field }) => (
            <Input
              label="Link trade offer"
              register={register}
              id={"link"}
              errors={errors}
              type="text"
              {...field}
            />
          )}
        />
        <button
          type="submit"
          className={clsx(`
                    ${styles.button}
                    ${styles.send}
                `)}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SettingsCreateForm;
