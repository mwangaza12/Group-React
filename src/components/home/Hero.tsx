
export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-8">
            Restaurant Management
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-xl mb-12 text-base-content/70 max-w-2xl mx-auto">
            Everything you need to run your restaurant efficiently. Orders, inventory, staff, and analytics in one place.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary btn-lg">Start Free Trial</button>
            <button className="btn btn-outline btn-lg">See Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};