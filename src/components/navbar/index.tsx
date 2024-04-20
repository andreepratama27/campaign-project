import CategoryFilter from "../category-filter";

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between px-4 md:px-0">
      <div className="logo-wrapper">
        <p className="font-normal">Kitabisa</p>
      </div>
      <CategoryFilter />
    </nav>
  );
}
