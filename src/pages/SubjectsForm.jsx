// import axios from "axios";
// import { Form, NavLink, redirect, useNavigation } from "react-router-dom";
// import { toast } from "react-toastify";
// import FormRow from "../components/formRow";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const token = localStorage.getItem("token");

//   try {
//     await axios.post("/api/v1/subjects", data, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     toast.success("Sujet ajouté");
//     return redirect("/community");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const addSubject = () => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";

//   return (
//     <>
//       <div className="form-content">
//         <Form method="POST" className="form">
//           <FormRow type="name" name="name" labelText="Nom du sujet" />
//           <FormRow
//             type="text"
//             name="description"
//             labelText="Description du sujet"
//           />
//           <FormRow
//             type="file"
//             labelText="Image"
//             name="image"
//             accept="image/*"
//           />

//           <div className="btn-container">
//             <button
//               type="submit"
//               className="submit-btn"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Ajout..." : "Publier"}
//             </button>
//             <NavLink to="/community" className="back-btn">
//               Retour
//             </NavLink>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };
// export default addSubject;
