// import { NavLink, redirect } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useLoaderData } from "react-router-dom";
// import Title from "../components/Title";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import SingleCard from "../components/SingleCard";

// export const loader = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const { data } = await axios("/api/v1/subjects", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return { data };
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return redirect("/login");
//   }
// };

// const Community = () => {
//   const { data } = useLoaderData();
//   const subjects = data.AllSubjects;
//   return (
//     <main className="full-page">
//       <section className="section">
//         <Title title="Communauté" />
//         <div className="text-center">
//           <NavLink to="/addsubject" className="add-btn">
//             Ajouter un sujet
//           </NavLink>
//         </div>
//         <Container>
//           <Row xs={1} md={2} className="g-4">
//             {subjects.map((subject) => {
//               return (
//                 <SingleCard
//                   key={subject.community_forums_id}
//                   info={subject}
//                   id={subject.community_forums_id}
//                 />
//               );
//             })}
//           </Row>
//         </Container>
//       </section>
//     </main>
//   );
// };
// export default Community;
