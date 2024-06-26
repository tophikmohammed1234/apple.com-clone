import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommonResource/css/styles.css";

import MainSection from "./Main/MainSection";
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Ipad from "./Pages/Ipad";
import Watch from "./Pages/Watch";
import Tv from "./Pages/Tv";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import SharedLayout from "./Pages/SharedLayout";
import ProductPage from "./Pages/ProductPage";
import MacSinglePage from "./Pages/MacSinglePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<MainSection />} />
				<Route path="mac" element={<Mac />} />
				<Route path="mac/:MacId" element={<MacSinglePage />} />
				<Route path="iphone" element={<Iphone />} />
				<Route path="iphone/:ProductId" element={<ProductPage />} />
				<Route path="ipad" element={<Ipad />} />
				<Route path="watch" element={<Watch />} />
				<Route path="tv" element={<Tv />} />
				<Route path="music" element={<Music />} />
				<Route path="support" element={<Support />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
}

export default App;
