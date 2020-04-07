import ReactOnRails from "react-on-rails";

import { ProductCard } from "../bundles/ProductGallery/components/ProductCard.jsx";
import { ProductRow } from "../bundles/ProductGallery/components/ProductRow.jsx";
import { SiteHeader } from "../bundles/ProductGallery/components/SiteHeader.jsx";
import { Navbar } from "../bundles/HelloWorld/components/Navbar.jsx";

ReactOnRails.register({
  SiteHeader,
  ProductCard,
  ProductRow,
  Navbar
});
