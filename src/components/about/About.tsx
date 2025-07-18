// About page component with restaurant introduction, features, and vision/mission
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUtensils,
  faSmile,
  faStar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./about.css";

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">من نحن</h2>

      {/* Introduction section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h4>مرحبًا بك في Shrimp Zone!</h4>
          <p className="col">
            شريمب زون هو مطعم بحري مميز يقدم لك تجربة طعام فريدة من نوعها، حيث
            تمتزج النكهات الطازجة بالجودة العالية في كل طبق. نختار مكوناتنا
            بعناية، ونُحضر أطباقنا بأسلوب عصري يرضي جميع الأذواق.
          </p>
          <p className="col">
            سواء كنت من عشاق الجمبري، أو تفضل المأكولات الصحية، أو تبحث عن وجبة
            ممتعة مع العائلة أو الأصدقاء – نحن هنا لنقدم لك تجربة لا تُنسى.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/image/final.jpg"
            alt="عن المطعم"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Features section */}
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <FontAwesomeIcon
            icon={faUtensils}
            size="3x"
            className="text-primary mb-3"
          />
          <h4>تنوع في الأطباق</h4>
          <p className="col">
            نقدم مجموعة واسعة من المأكولات البحرية بنكهات مبتكرة وأصيلة.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <FontAwesomeIcon
            icon={faSmile}
            size="3x"
            className="text-success mb-3"
          />
          <h4>أجواء مريحة</h4>
          <p className="col">
            مطعمنا مصمم ليمنحك شعورًا بالراحة والدفء في كل زيارة.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            className="text-warning mb-3"
          />
          <h4>جودة مضمونة</h4>
          <p className="col">
            نستخدم أفضل المكونات ونلتزم بأعلى معايير النظافة والجودة.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <FontAwesomeIcon
            icon={faLeaf}
            size="3x"
            className="text-success mb-3"
          />
          <h4>خيارات صحية</h4>
          <p className="col">نوفر أطباق خفيفة وصحية تناسب نمط حياتك.</p>
        </div>
      </div>

      {/* Vision & Mission section */}
      <div className="mt-5">
        <h4 className="mb-3">رؤيتنا:</h4>
        <p className="col">
          أن نكون الوجهة الأولى لعشاق المأكولات البحرية، من خلال تقديم تجربة
          طعام استثنائية تجمع بين الطعم الأصيل والخدمة الراقية.
        </p>

        <h4 className="mt-4 mb-3">رسالتنا:</h4>
        <p className="col">
          تقديم أطباق بحرية عالية الجودة في بيئة ترحيبية ومريحة، مع الحرص على
          الابتكار، والتنوع، ورضا العملاء.
        </p>
      </div>
      <div className="col d-flex gap-3">
        <a
          href="https://www.facebook.com/shrimpzone1/"
          className="icon-facebook fs-1 text-decoration-none"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/shrimpzone1/?hl=ar"
          className="icon-instagram fs-1 text-decoration-none"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.tiktok.com/@shrimpzone0"
          className="icon-tiktok fs-1  text-decoration-none"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </div>
  );
}
