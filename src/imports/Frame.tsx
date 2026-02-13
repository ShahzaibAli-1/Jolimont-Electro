import svgPaths from "./svg-jp03xjl1ag";

function Group1() {
  return (
    <div className="absolute inset-[8%_5.23%_17.5%_5.24%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.6014 29.8014">
        <g id="Group">
          <path d={svgPaths.p1411f780} id="Oval-Copy-2" stroke="var(--stroke-0, #263C60)" strokeLinecap="round" strokeWidth="1.2" />
          <path clipRule="evenodd" d={svgPaths.p375c6980} fill="var(--fill-0, #263C60)" fillRule="evenodd" id="Combined-Shape" />
          <path clipRule="evenodd" d={svgPaths.p224b4900} fill="var(--fill-0, #263C60)" fillRule="evenodd" id="Combined-Shape_2" />
          <path d={svgPaths.p1401ef00} fill="var(--fill-0, #263C60)" id="Rectangle" />
          <path d={svgPaths.pcc2600} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-2" />
          <path d={svgPaths.p39709200} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-4" />
          <path d={svgPaths.p23acbe00} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-9" />
          <path d={svgPaths.p2c277c70} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-6" />
          <path d={svgPaths.p89c6b70} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-10" />
          <path d={svgPaths.p8c4e600} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-8" />
          <path d={svgPaths.p12feb300} fill="var(--fill-0, #263C60)" id="Rectangle-Copy-11" />
          <path d={svgPaths.pc4d3e80} id="Path-2" stroke="var(--stroke-0, #263C60)" strokeLinecap="round" strokeLinejoin="round" />
          <path clipRule="evenodd" d={svgPaths.p14c27600} fill="var(--fill-0, #263C60)" fillRule="evenodd" id="Combined-Shape_3" />
          <path clipRule="evenodd" d={svgPaths.pcc3400} fill="var(--fill-0, #263C60)" fillRule="evenodd" id="Combined-Shape-Copy-2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8%_5.23%_17.5%_5.24%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function IconTruck() {
  return (
    <div className="absolute contents inset-[8%_5.23%_17.5%_5.24%]" data-name="icon/truck">
      <Group />
    </div>
  );
}

function ProductDetail() {
  return (
    <div className="absolute contents inset-[8%_5.23%_17.5%_5.24%]" data-name="product_detail">
      <IconTruck />
    </div>
  );
}

function ShopPartsSearchResults() {
  return (
    <div className="absolute contents inset-[8%_5.23%_17.5%_5.24%]" data-name="Shop-Parts-(Search-Results)">
      <ProductDetail />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <ShopPartsSearchResults />
    </div>
  );
}