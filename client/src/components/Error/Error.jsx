import './styles.css';

export const Error = ({ message }) => {
  return (
    <div className={'error'}>
      <b>{message}</b>
    </div>
  );
};
