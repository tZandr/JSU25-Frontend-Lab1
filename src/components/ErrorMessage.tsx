import './ErrorMessage.css';

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return <p className="ErrorMessage">{message}</p>;
}
