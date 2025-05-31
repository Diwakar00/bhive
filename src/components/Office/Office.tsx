import { CrosshairIcon } from "lucide-react";
import "./Office.css";

export interface OfficeProps {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null | string;
  rules: null | string;
  amenities: string[];
  images: string;
  working_hours_start: string;
  working_hours_end: string;
  facilities: null | string;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: Record<string, any>;
  manager_id: null | string;
  can_edit: boolean;
}

const Office: React.FC<OfficeProps> = ({ address, day_pass_price, images }) => {
  function truncate(str: string): string {
    return str.length > 40 ? str.slice(0, 38) + ".." : str;
  }

  return (
    <div className="workspace-card">
      <div className="card-header">
        <h4 className="workspace-title">{truncate(address)}</h4>
        <div className="location-info">
          <CrosshairIcon className="location-icon" />
          <span className="distance">6 Kms</span>
        </div>
      </div>

      <div className="workspace-image">
        <img src={images} alt={address} className="image" />
      </div>

      <div className="pricing-section">
        <div className="day-pass">
          <span className="price-container">
            <div className="pass-label">Day Pass</div>
            <div className="price">
              <p className="currency">₹{day_pass_price}</p>
              <span className="duration">/Day</span>
            </div>
          </span>
          <div className="arrow-icon">❯❯❯</div>
        </div>

        <div className="bulk-pass">
          <div className="discount-badge">20% Discount</div>
          <span>
            <div className="pass-label">Bulk Pass</div>
            <div className="price">
              <p className="currency">₹{day_pass_price * 8}</p>
              <span className="duration">/10 Days</span>
            </div>
          </span>
          <div className="arrow-icon">❯❯❯</div>
        </div>
      </div>
    </div>
  );
};
export default Office;
