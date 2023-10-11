import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";

const CommentaryForm = ({ submitCommentary, commentary, setCommentary }) => {
  return (
    <>
      <FloatingLabel
        className="mb-5"
        controlId="floatingTextarea2"
        placeholder="Ajouter un commentaire"
        onChange={(e) => {
          setCommentary(e.target.value);
        }}
      >
        <Form.Control method="POST" as="textarea" style={{ height: "100px" }} />
        <button
          type="submit"
          className="submit-btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            submitCommentary(commentary);
          }}
        >
          Publier
        </button>
      </FloatingLabel>
    </>
  );
};
export default CommentaryForm;

//
