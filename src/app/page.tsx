import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

type FormValues = {
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // API呼び出しをここに記述
  };

  return (
    <div className="registration-container">
      <h2>MemorEdgeアカウントを登録してサービスを利用しよう</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <label>
          ユーザー名
          <input
            {...register("username", { required: "ユーザー名は必須です" })}
            placeholder="ユーザー名を入力"
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </label>

        <label>
          メールアドレス
          <input
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "有効なメールアドレスを入力してください",
              },
            })}
            placeholder="メールアドレスを入力"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>

        <label>
          パスワード
          <input
            type="password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 6,
                message: "パスワードは6文字以上にしてください",
              },
            })}
            placeholder="パスワードを入力"
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </label>

        <label className="terms">
          <input
            type="checkbox"
            {...register("agreeToTerms", { required: "利用規約に同意してください" })}
          />
          利用規約・プライバシーポリシーに同意する
        </label>
        {errors.agreeToTerms && <p className="error">{errors.agreeToTerms.message}</p>}

        <button type="submit" className="submit-button">登録する</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
