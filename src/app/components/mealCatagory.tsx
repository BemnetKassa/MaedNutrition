

const MealCategory = () => (

  <section
    id="plans"
    className="bg-[#FAFAFA] py-24"
  >
    <div className="mx-auto max-w-[1450px] px-4 md:px-6">

      {/* Heading */}
      <div className="max-w-[700px]">
        <span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
          Meal Categories
        </span>

        <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#111111] md:text-6xl">
          Meals Designed
          <br />
          For Every Goal
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
          Choose from chef-crafted meal plans tailored for
          weight loss, muscle gain, clean eating, and more.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          "Weight Loss",
          "Muscle Gain",
          "Keto Friendly",
          "High Protein",
        ].map((item, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-[32px] border border-[#ECECEC] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-[240px] rounded-[24px] bg-[#F4F4F4]" />

            <h3 className="mt-6 text-2xl font-bold text-[#111111]">
              {item}
            </h3>

            <p className="mt-3 text-[#6B7280]">
              Personalized healthy meals crafted for your body goals.
            </p>

            <button className="mt-6 rounded-xl bg-[#3FAE49] px-5 py-3 text-sm font-semibold text-white">
              Explore Meals
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MealCategory;