import React from "react";
import scss from "../card/Card.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const FilterProduct = () => {
  return (
    <div className={scss.sideBar}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}>
            <h3>CATEGORY</h3>
            <button>
              <ArrowRightIcon />
              MALE PERFUMES
            </button>
            <button>
              <ArrowRightIcon />
              FEMALE PERFUMES
            </button>
            <button>
              <ArrowRightIcon />
              UNISEX
            </button>
          </div>
          <div className={scss.box}>
            <h3>PRICE</h3>
            <select>
              <option value="">Max</option>
              <option value="">Low</option>
            </select>
          </div>
          <div className={scss.box}>
            <h3>BRAND</h3>

            <button>
              <ArrowRightIcon />
              DIOR
            </button>
            <button>
              <ArrowRightIcon />
              VERSACE
            </button>
            <button>
              <ArrowRightIcon />
              PRADA
            </button>
            <button>
              <ArrowRightIcon />
              TOM FORD
            </button>
          </div>
          <div className={scss.box}>
            <h3>TYPE</h3>
            <button>
              <ArrowRightIcon />
              ELIXIR
            </button>
            <button>
              <ArrowRightIcon />
              COLOGNE
            </button>
            <button>
              <ArrowRightIcon />
              PERFUME
            </button>
            <button>
              <ArrowRightIcon />
              EAU DE TOILETTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
