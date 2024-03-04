import Button from "./Button";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <Button
        text={"Next"}
        onClick={() => dispatch({ type: "nextQuestion" })}
      />
    );
  if (index === numQuestions - 1)
    return (
      <Button text={"Finish"} onClick={() => dispatch({ type: "finish" })} />
    );
}

export default NextButton;
