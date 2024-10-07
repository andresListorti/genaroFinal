import React from "react";

const Collections = () => {
  return (
    <div>
      <main>
        <section class="collection mujer">
          <a class="collection__link" href="./pages/mujer.html">
            <article class="collection__content">
              <h3 class="collection__title">Mujer</h3>
            </article>
          </a>
        </section>

        <section class="collection hombre">
          <a class="collection__link" href="./pages/hombre.html">
            <article class="collection__content">
              <h3 class="collection__title">Hombre</h3>
            </article>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Collections;
