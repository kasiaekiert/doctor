import ReactOnRails from "react-on-rails";

import { ProductCard } from "../bundles/WebStore/components/ProductCard.jsx";
import { ProductRow } from "../bundles/WebStore/components/ProductRow.jsx";
import { SiteHeader } from "../bundles/WebStore/components/SiteHeader.jsx";
import { ShoppingCartList } from "../bundles/WebStore/components/ShoppingCartList.jsx";
import { CheckoutForm } from "../bundles/WebStore/components/CheckoutForm.jsx";
import { MyCalendar } from "../bundles/Calendar/components/Calendar.jsx";
import { ProductPage } from "../bundles/WebStore/components/ProductPage.jsx";

ReactOnRails.register({
  SiteHeader,
  ProductCard,
  ProductRow,
  ShoppingCartList,
  CheckoutForm,
  MyCalendar,
  SiteHeader,
  ProductRow,
  ProductPage,
});
