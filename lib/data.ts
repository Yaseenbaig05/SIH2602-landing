export interface CoalMineNode {
  id: string;
  name: string;
  subsidiary: string;
  state: string;
  type: "Open Cast" | "Underground" | "Mixed";
  lat: number;
  lng: number;
  complianceScore: number;
  status: "Normal" | "Watch" | "Critical";
  activePersonnel: number;
  methaneLevel: string; // e.g. "0.32%"
  ventilationStatus: "Optimal" | "Degraded" | "Alert";
  overdueCARs: number;
}

export const COAL_MINES: CoalMineNode[] = [
  {
    id: "MINE-JH-01",
    name: "Jharia Seam XII Complex",
    subsidiary: "BCCL (Bharat Coking Coal Ltd)",
    state: "Jharkhand",
    type: "Underground",
    lat: 23.75,
    lng: 86.42,
    complianceScore: 78.4,
    status: "Critical",
    activePersonnel: 487,
    methaneLevel: "0.84% (Threshold: 0.75%)",
    ventilationStatus: "Alert",
    overdueCARs: 6,
  },
  {
    id: "MINE-WB-02",
    name: "Raniganj Incline Shaft 04",
    subsidiary: "ECL (Eastern Coalfields Ltd)",
    state: "West Bengal",
    type: "Underground",
    lat: 23.61,
    lng: 87.08,
    complianceScore: 92.1,
    status: "Normal",
    activePersonnel: 342,
    methaneLevel: "0.19%",
    ventilationStatus: "Optimal",
    overdueCARs: 1,
  },
  {
    id: "MINE-CG-03",
    name: "Gevra Mega Open Cast",
    subsidiary: "SECL (South Eastern Coalfields)",
    state: "Chhattisgarh",
    type: "Open Cast",
    lat: 22.35,
    lng: 82.68,
    complianceScore: 96.8,
    status: "Normal",
    activePersonnel: 890,
    methaneLevel: "0.02%",
    ventilationStatus: "Optimal",
    overdueCARs: 0,
  },
  {
    id: "MINE-MP-04",
    name: "Jayant Open Cast Project",
    subsidiary: "NCL (Northern Coalfields Ltd)",
    state: "Madhya Pradesh",
    type: "Open Cast",
    lat: 24.20,
    lng: 82.66,
    complianceScore: 88.5,
    status: "Watch",
    activePersonnel: 615,
    methaneLevel: "0.04%",
    ventilationStatus: "Optimal",
    overdueCARs: 3,
  },
  {
    id: "MINE-OD-05",
    name: "Bharatpur Pit 03",
    subsidiary: "MCL (Mahanadi Coalfields Ltd)",
    state: "Odisha",
    type: "Open Cast",
    lat: 20.95,
    lng: 85.21,
    complianceScore: 84.2,
    status: "Watch",
    activePersonnel: 512,
    methaneLevel: "0.05%",
    ventilationStatus: "Optimal",
    overdueCARs: 4,
  },
  {
    id: "MINE-MH-06",
    name: "Chandrapur Deep Colliery",
    subsidiary: "WCL (Western Coalfields Ltd)",
    state: "Maharashtra",
    type: "Mixed",
    lat: 19.96,
    lng: 79.29,
    complianceScore: 95.0,
    status: "Normal",
    activePersonnel: 395,
    methaneLevel: "0.22%",
    ventilationStatus: "Optimal",
    overdueCARs: 0,
  },
];

export const SILO_DOCUMENTS = [
  { id: "silo-1", name: "Form IV Inspection Register", format: "Physical Binder", age: "Updated 14 days ago", latency: "+336 hrs", risk: "Unsynchronized signatures" },
  { id: "silo-2", name: "Underground Shift Roll", format: "Paper Ledger", age: "Updated at 06:00 Shift Handover", latency: "+8 hrs", risk: "Discrepancy with RFID gate" },
  { id: "silo-3", name: "DGMS Statutory Gas Sheets", format: "Handwritten Memos", age: "Morning Manual Testing", latency: "+6 hrs", risk: "No real-time alert trigger" },
  { id: "silo-4", name: "Contractor Compliance Files", format: "Local Excel (.xlsx)", age: "Isolated PC in Sector Office", latency: "+48 hrs", risk: "Expired vocational training" },
  { id: "silo-5", name: "Overburden Slope Stability Survey", format: "Paper Plot Sheets", age: "Monthly Topo Review", latency: "+720 hrs", risk: "Monsoon slippage blindspot" },
  { id: "silo-6", name: "Equipment Maintenance Log", format: "Filing Cabinet", age: "Field mechanic slips", latency: "+96 hrs", risk: "Ignored flameproof casing certs" },
];

export const WORKFLOW_STAGES = [
  { step: "01", title: "Statutory Inspection", role: "DGMS Inspector / Colliery Safety Officer", badge: "Field App (Offline-First)", desc: "AI-guided checklist triggered by periodic schedule or telemetry anomaly." },
  { step: "02", title: "Geo-Observation", role: "Mine Safety Surveyor", badge: "GPS ±0.4m Stamp", desc: "Automated logging with encrypted timestamp, depth coordinate, and photo evidence." },
  { step: "03", title: "Violation Tagging", role: "Autonomous Rules Engine", badge: "CMR 2017 Reg 124", desc: "AI references Coal Mines Regulations; flags high-risk methane ventilation deficiency." },
  { step: "04", title: "Corrective Action (CAR)", role: "Mine General Manager", badge: "SLA: 24 Hours", desc: "Auto-dispatches task with mandatory safety protocols to Section Engineer." },
  { step: "05", title: "Tamper-Proof Evidence", role: "Ventilation Foreman", badge: "SHA-256 Ledger", desc: "High-res geotagged photo of auxiliary fan booster replacement & airflow manometer." },
  { step: "06", title: "Independent Verification", role: "DGMS Regional Inspector", badge: "Digital Sign-off", desc: "Dual biometric clearance affirming hazardous condition remediated." },
  { step: "07", title: "Statutory Closure", role: "Central Governance Spine", badge: "Verified & Closed", desc: "Permanent immutable ledger entry archived with government audit compliance token." },
];

export const MONTHLY_TIMELINE_DATA = [
  { month: "Jan", methaneAlerts: 14, ventDowntimeHrs: 4.2, inspections: 48, compliance: 96.2, insight: "Winter inversion baseline stable" },
  { month: "Feb", methaneAlerts: 18, ventDowntimeHrs: 6.8, inspections: 52, compliance: 95.1, insight: "Auxiliary fan bearing wear flagged in Shaft 2" },
  { month: "Mar", methaneAlerts: 31, ventDowntimeHrs: 18.5, inspections: 41, compliance: 88.4, insight: "Unplanned power outage correlated with gas accumulation" },
  { month: "Apr", methaneAlerts: 44, ventDowntimeHrs: 29.1, inspections: 35, compliance: 78.9, insight: "Critical threshold breach: CMR Reg 124 violation issued" },
  { month: "May", methaneAlerts: 19, ventDowntimeHrs: 8.4, inspections: 64, compliance: 91.2, insight: "Dual dual-circuit backup fan commissioned; CAR closed" },
  { month: "Jun", methaneAlerts: 9, ventDowntimeHrs: 2.1, inspections: 58, compliance: 97.4, insight: "Predictive ventilation AI maintaining optimal air velocity" },
];

export const COPILOT_SAMPLE_QUERIES = [
  {
    query: "Why is Mine A (Jharia Seam XII) considered high priority?",
    response: "Mine A is designated Priority-1 (Critical) due to 3 converging risk factors:\n1. CMR Reg 124 Breach: Continuous optical CH4 sensor MTH-804 recorded 0.84% methane (statutory ceiling: 0.75%) at Face 3B for 42 minutes.\n2. Overdue CAR #CAR-2026-089: Auxiliary booster fan replacement is 48 hours past the 24-hr statutory SLA.\n3. Personnel Exposure: 84 miners currently assigned to working sector downstream of Degraded Fan #02.",
    sources: [
      { doc: "DGMS Inspection Report #DGMS/NZ/2026/041", date: "Yesterday, 14:20 IST", page: "Section 3.2 (Ventilation)" },
      { doc: "SCADA Gas Telemetry Feed", date: "Continuous Real-time (Node #MTH-804)", page: "Face 3B, Seam XII" },
      { doc: "Coal Mines Regulations (CMR) 2017", date: "Statutory Law", page: "Regulation 124(1)(b)" }
    ]
  },
  {
    query: "What is the statutory requirement for haul road bench slope in open cast mines?",
    response: "According to Coal Mines Regulations 2017, Regulation 106(1):\n- In hard rock, bench height shall not exceed the maximum digging height of the excavator, and width must not be less than height.\n- In alluvium or soft ground, bench slope shall not exceed 45° from horizontal, with bench height not exceeding 3 metres.\n- All dump stability inspections must maintain a minimum factor of safety of 1.3 under saturated monsoon conditions.",
    sources: [
      { doc: "Coal Mines Regulations 2017", date: "Statutory Gazette", page: "Reg 106 & DGMS Circular 02/2010" },
      { doc: "Mines Act 1952", date: "Central Legislation", page: "Section 22A" }
    ]
  },
  {
    query: "Show unaccounted personnel protocol for emergency evacuation.",
    response: "Protocol EP-4: Mandatory Emergency Muster Trigger:\n1. Cap-lamp RFID tag pinged across underground zone readers.\n2. Visual & audible evacuation strobe activated via intrinsically safe paging.\n3. Rescue team dispatched to last recorded transponder coordinates (±1.5m).\n4. Automatic notification transmitted to DGMS Regional Inspectorate and District Magistrate.",
    sources: [
      { doc: "DGMS Disaster Management Plan Guidelines", date: "Circular No. 04 of 2018", page: "Standard Operating Procedure 11" },
      { doc: "Colliery Emergency Preparedness Plan", date: "Verified 2026", page: "Underground Muster Protocol" }
    ]
  }
];
