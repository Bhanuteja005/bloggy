const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 bg-gray-100 dark:bg-black rounded-xl p-5  items-center">
      {/* image  */}
      <div>
        <h2 className="font-bold text-base md:text-xl lg:text-4xl">
          Welcome to <span className="text-indigo-600">Blog Platform</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Explore blogs from different categories
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
