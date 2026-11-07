import { PRODUCT_NAME } from "../config";

export default function Header() {
  return (
    <nav>
      <a className="logo" href="#top">{PRODUCT_NAME.slice(0, 3)}<b>{PRODUCT_NAME.slice(3)}</b></a>
      <a className="btn alt" href="#pricing">Pricing</a>
    </nav>
  );
}
