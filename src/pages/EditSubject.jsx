// import axios from "axios";
// import {
//   Form,
//   NavLink,
//   redirect,
//   useNavigation,
//   useLoaderData,
// } from "react-router-dom";
// import { toast } from "react-toastify";
// import FormRow from "../components/formRow";

// export const action = async ({ request, params }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const token = localStorage.getItem("token");
//   const { id } = params;

//   try {
//     await axios.put(`/api/v1/subjects/${id}`, data, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     toast.success("Sujet modifié");
//     return redirect("/community");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// export const loader = async ({ params }) => {
//   const token = localStorage.getItem("token");
//   const { id } = params;

//   try {
//     const { data } = await axios(`/api/v1/subjects/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return { data };
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const EditSubject = () => {
//   const { data } = useLoaderData();
//   const { name, description } = data.SingleSubject;
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";

//   return (
//     <>
//       <div className="form-content">
//         <Form method="POST" className="form">
//           <FormRow
//             type="name"
//             name="name"
//             labelText="Nom du sujet"
//             defaultValue={name}
//           />
//           <FormRow
//             type="description"
//             name="description"
//             labelText="Description du sujet"
//             defaultValue={description}
//           />
//           <div className="btn-container">
//             <button
//               type="submit"
//               className="submit-btn"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Ajout..." : "Modifier"}
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
// export default EditSubject;
