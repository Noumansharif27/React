function handleFormSubmition(event) {
  event.preventDefault();
  console.log("Form Submited successfully!");
  console.log(event);
}

function Form() {
  return (
    <form>
      <input placeholder="write something" />
      <button onClick={handleFormSubmition}>Submit</button>
    </form>
  );
}

export default Form;
