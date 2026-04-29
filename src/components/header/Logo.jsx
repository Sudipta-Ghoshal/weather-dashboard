import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="./index.html">
      <img class="h-9" src={logo} alt="Weather App" />
    </a>
  );
}
