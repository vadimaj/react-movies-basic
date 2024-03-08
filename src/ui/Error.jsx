import { useNavigate, useRouteError } from 'react-router-dom';
const Error = (props) => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Someting went wrong 😥</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
};

export default Error;
