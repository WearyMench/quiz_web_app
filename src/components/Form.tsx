import { FormWrapper } from "./Form.styles";

type Props = {
  totalQuestions: number;
  setTotalQuestions: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const Form: React.FC<Props> = ({
  totalQuestions,
  setTotalQuestions,
  setCategory,
  difficulty,
  setDifficulty,
  setType,
}) => {
  return (
    <FormWrapper>
      <input
        type="number"
        value={totalQuestions}
        onChange={(e) => setTotalQuestions(e.target.valueAsNumber)}
      />
      <select name="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="9">General Knowledge</option>
        <option value="15">Video games</option>
        <option value="17">Science and Nature</option>
        <option value="20">Mythology</option>
        <option value="31">anime and Manga</option>
      </select>
      <select name="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select name="type" onChange={(e) => setType(e.target.value)}>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean" disabled={difficulty === "hard" ? true : false}>
          True / False
        </option>
        {/* I disabled the option because when it was selected next to the hard difficulty it gave an error. */}
      </select>
    </FormWrapper>
  );
};

export default Form;
