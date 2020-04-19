import ReactOnRails from "react-on-rails";

import { Navbar } from "../bundles/WebStore/components/Navbar.jsx";
import { ProductCard } from "../bundles/WebStore/components/ProductCard.jsx";
import { ProductRow } from "../bundles/WebStore/components/ProductRow.jsx";
import { SiteHeader } from "../bundles/WebStore/components/SiteHeader.jsx";
import { ShoppingCartList } from "../bundles/WebStore/components/ShoppingCartList.jsx";

ReactOnRails.register({
  Navbar,
  SiteHeader,
  ProductCard,
  ProductRow,
  ShoppingCartList,
});
