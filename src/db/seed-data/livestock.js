/**
 * Vietnamese Livestock Database
 * 30+ animal types with bilingual (English/Vietnamese) data
 */

export const livestockData = [
  // CATTLE (Gia súc trâu bò)
  {
    name_en: 'Dairy Cow',
    name_vi: 'Bò sữa',
    scientific_name: 'Bos taurus',
    category: 'cattle',
    typical_lifespan_months: 240,
    gestation_period_days: 283,
    feed_requirements_en: 'High-quality grass, hay, silage, and grain concentrate. Provide 30-50 kg green fodder daily plus 2-4 kg concentrate based on milk production. Constant access to clean water (60-80 liters/day).',
    feed_requirements_vi: 'Cỏ chất lượng cao, cỏ khô, cỏ ủ chua và thức ăn đậm đặc. Cho ăn 30-50 kg cỏ xanh hàng ngày cộng 2-4 kg thức ăn đậm đặc tùy năng suất sữa. Luôn có nước sạch (60-80 lít/ngày).',
    housing_requirements_en: 'Clean, well-ventilated barn with individual stalls or tie-stalls. Provide 15-20 m² space per cow. Concrete flooring with drainage. Bedding of straw or sawdust. Protect from heat and rain.',
    housing_requirements_vi: 'Chuồng sạch sẽ, thông thoáng với ngăn riêng hoặc buộc dây. Diện tích 15-20 m² mỗi con. Sàn bê tông có thoát nước. Trải rơm hoặc mùn cưa. Che chắn nắng mưa.',
    common_diseases: ['mastitis', 'foot rot', 'milk fever', 'ketosis', 'bloat', 'brucellosis'],
    vaccination_schedule: {
      required: ['FMD (Foot and Mouth Disease)', 'Brucellosis', 'Anthrax'],
      frequency: 'FMD every 6 months, Brucellosis annually, Anthrax annually'
    },
    care_tips_en: 'Milk 2-3 times daily at regular intervals. Practice good udder hygiene. Trim hooves every 6 months. Deworm every 3 months. Monitor body condition score. Separate sick animals immediately. Keep detailed health and production records.',
    care_tips_vi: 'Vắt sữa 2-3 lần/ngày vào giờ cố định. Vệ sinh vú sạch sẽ. Cắt móng 6 tháng/lần. Tẩy giun 3 tháng/lần. Theo dõi điểm thể trạng. Cách ly ngay khi bệnh. Ghi chép sức khỏe và năng suất chi tiết.'
  },
  {
    name_en: 'Beef Cattle',
    name_vi: 'Bò thịt',
    scientific_name: 'Bos taurus',
    category: 'cattle',
    typical_lifespan_months: 180,
    gestation_period_days: 283,
    feed_requirements_en: 'Pasture grass, hay, silage, and grain for finishing. Provide mineral supplements and salt licks. Growing cattle need 2-3% of body weight in feed daily. Finishing cattle require higher concentrate levels.',
    feed_requirements_vi: 'Cỏ đồng, cỏ khô, cỏ ủ chua và thóc lúa lúc vỗ béo. Bổ sung khoáng và đá muối. Bò đang lớn cần 2-3% trọng lượng thân thức ăn mỗi ngày. Bò vỗ béo cần nhiều thức ăn đậm đặc hơn.',
    housing_requirements_en: 'Open shelter or semi-enclosed barn. Provide 10-15 m² per animal. Can be raised on pasture with shelter from extreme weather. Good drainage essential. Feedlot for finishing phase.',
    housing_requirements_vi: 'Chuồng hở hoặc nửa kín. Diện tích 10-15 m² mỗi con. Có thể nuôi thả có chỗ trú khi thời tiết xấu. Thoát nước tốt là thiết yếu. Chuồng vỗ béo cho giai đoạn cuối.',
    common_diseases: ['foot rot', 'pink eye', 'bloat', 'respiratory infections', 'parasites'],
    vaccination_schedule: {
      required: ['FMD', 'Anthrax', 'Blackleg'],
      frequency: 'FMD every 6 months, others annually'
    },
    care_tips_en: 'Rotate pastures to prevent overgrazing. Deworm regularly every 3 months. Provide adequate shade and water. Monitor for parasites. Castrate male calves not for breeding. Separate by age and size groups.',
    care_tips_vi: 'Luân chuyển đồng cỏ tránh chăn quá mức. Tẩy giun đều đặn 3 tháng/lần. Cung cấp đủ bóng râm và nước. Theo dõi ký sinh trùng. Thiến bê đực không giống. Nuôi tách theo nhóm tuổi và kích thước.'
  },
  {
    name_en: 'Water Buffalo',
    name_vi: 'Trâu nước',
    scientific_name: 'Bubalus bubalis',
    category: 'cattle',
    typical_lifespan_months: 300,
    gestation_period_days: 310,
    feed_requirements_en: 'Grass, rice straw, water plants, and agricultural by-products. Adult buffalo consume 8-10 kg dry matter daily. Provide supplementary concentrate during working or lactation. Access to wallowing water essential.',
    feed_requirements_vi: 'Cỏ, rơm rạ, cỏ nước và phụ phẩm nông nghiệp. Trâu trưởng thành ăn 8-10 kg chất khô mỗi ngày. Bổ sung thức ăn đậm đặc khi làm việc hoặc cho sữa. Cần có ao tắm.',
    housing_requirements_en: 'Simple shelter from sun and rain. Provide access to wallowing pond or mud bath. Can be tethered in field. 8-12 m² per animal under shelter. Heat-tolerant but needs cooling.',
    housing_requirements_vi: 'Chuồng đơn giản che nắng mưa. Cần có ao tắm hoặc hố bùn. Có thể buộc ngoài đồng. Diện tích 8-12 m² mỗi con trong chuồng. Chịu nóng tốt nhưng cần làm mát.',
    common_diseases: ['foot and mouth disease', 'hemorrhagic septicemia', 'tuberculosis', 'parasites'],
    vaccination_schedule: {
      required: ['FMD', 'Hemorrhagic Septicemia (HS)', 'Anthrax'],
      frequency: 'FMD and HS every 6 months, Anthrax annually'
    },
    care_tips_en: 'Allow daily bathing in water. Provide shade during hot hours. Trim hooves annually. Use for rice field plowing traditionally. Gentle handling required. Monitor for external parasites.',
    care_tips_vi: 'Cho tắm hàng ngày. Tạo bóng râm khi nắng nóng. Cắt móng hàng năm. Truyền thống dùng cày ruộng lúa. Xử lý nhẹ nhàng. Theo dõi ký sinh trùng ngoài da.'
  },

  // POULTRY (Gia cầm)
  {
    name_en: 'Chicken (Layer)',
    name_vi: 'Gà đẻ trứng',
    scientific_name: 'Gallus gallus domesticus',
    category: 'poultry',
    typical_lifespan_months: 60,
    gestation_period_days: 21,
    feed_requirements_en: 'Commercial layer feed with 16-18% protein. Provide 100-120g per bird daily. Calcium supplement (oyster shell) for strong eggshells. Fresh water always available. Grit for digestion.',
    feed_requirements_vi: 'Thức ăn gà đẻ thương mại 16-18% protein. Cho ăn 100-120g mỗi con mỗi ngày. Bổ sung canxi (vỏ sò) để vỏ trứng chắc. Luôn có nước sạch. Cát sỏi giúp tiêu hóa.',
    housing_requirements_en: 'Well-ventilated coop with 4-5 birds per m². Provide nesting boxes (1 per 4-5 hens). Perches for roosting at night. Clean litter (rice husks, sawdust). Protection from predators. 14-16 hours light daily.',
    housing_requirements_vi: 'Chuồng thông thoáng 4-5 con/m². Tổ đẻ trứng (1 tổ cho 4-5 mái). Giàn đậu ngủ ban đêm. Lót chuồng sạch (trấu, mùn cưa). Phòng chống thú dữ. Chiếu sáng 14-16 giờ/ngày.',
    common_diseases: ['Newcastle disease', 'infectious bronchitis', 'fowl pox', 'coccidiosis', 'fowl cholera'],
    vaccination_schedule: {
      required: ['Newcastle Disease', 'Infectious Bronchitis', 'Fowl Pox', 'Gumboro'],
      frequency: 'Newcastle every 3 months, others as per schedule'
    },
    care_tips_en: 'Collect eggs 2-3 times daily. Maintain consistent lighting. Keep coop clean and dry. Provide dust baths. Cull poor layers. Monitor for feather pecking. Peak laying 20-72 weeks of age.',
    care_tips_vi: 'Nhặt trứng 2-3 lần/ngày. Duy trì ánh sáng đều đặn. Giữ chuồng sạch khô. Tạo chỗ tắm bụi. Loại gà đẻ kém. Theo dõi mổ lông. Đẻ cao nhất 20-72 tuần tuổi.'
  },
  {
    name_en: 'Chicken (Broiler)',
    name_vi: 'Gà thịt',
    scientific_name: 'Gallus gallus domesticus',
    category: 'poultry',
    typical_lifespan_months: 2,
    gestation_period_days: 21,
    feed_requirements_en: 'High-protein commercial broiler feed. Starter (22-24% protein) for 0-3 weeks, grower (20-22%) for 3-6 weeks, finisher (18-20%) after 6 weeks. Feed freely available. Fresh water essential.',
    feed_requirements_vi: 'Thức ăn gà thịt thương mại giàu protein. Giai đoạn 1 (22-24% protein) cho 0-3 tuần, giai đoạn 2 (20-22%) cho 3-6 tuần, giai đoạn cuối (18-20%) sau 6 tuần. Cho ăn tự do. Nước sạch thiết yếu.',
    housing_requirements_en: 'Deep litter system with 10-12 birds per m². Temperature control crucial: 32-35°C for chicks, reduce gradually. Good ventilation. Clean dry litter. Continuous lighting for maximum growth.',
    housing_requirements_vi: 'Nuôi chuồng lót sàu 10-12 con/m². Kiểm soát nhiệt độ quan trọng: 32-35°C cho gà con, giảm dần. Thông gió tốt. Lót sạch khô. Chiếu sáng liên tục để tăng trưởng tối đa.',
    common_diseases: ['Newcastle disease', 'infectious bursal disease', 'coccidiosis', 'chronic respiratory disease'],
    vaccination_schedule: {
      required: ['Newcastle Disease', 'Gumboro', 'Infectious Bronchitis'],
      frequency: 'Multiple times during short growing period'
    },
    care_tips_en: 'Maintain strict biosecurity. Monitor daily weight gain (50-60g/day target). Harvest at 5-7 weeks (1.5-2.5 kg). Prevent leg problems with proper nutrition. All-in-all-out system recommended.',
    care_tips_vi: 'Kiểm soát vệ sinh nghiêm ngặt. Theo dõi tăng trưởng hàng ngày (mục tiêu 50-60g/ngày). Thu hoạch ở 5-7 tuần (1.5-2.5 kg). Phòng bệnh chân bằng dinh dưỡng hợp lý. Nên nuôi theo lứa.'
  },
  {
    name_en: 'Duck',
    name_vi: 'Vịt',
    scientific_name: 'Anas platyrhynchos',
    category: 'poultry',
    typical_lifespan_months: 60,
    gestation_period_days: 28,
    feed_requirements_en: 'Commercial duck feed or rice, broken rice, and green vegetables. Layers: 160-180g per day. Broilers: ad libitum. Provide swimming water or sprinklers. Supplement with snails and small fish.',
    feed_requirements_vi: 'Thức ăn vịt thương mại hoặc thóc, cơm tấm và rau xanh. Vịt đẻ: 160-180g/ngày. Vịt thịt: cho ăn tự do. Cung cấp ao bơi hoặc vòi phun. Bổ sung ốc và cá nhỏ.',
    housing_requirements_en: 'Shelter with access to water. 5-6 birds per m² under shelter. Can be raised on ponds or wet areas. Provide nesting areas for layers. Protection from predators essential. Dry resting area.',
    housing_requirements_vi: 'Chuồng có ao nước. 5-6 con/m² trong chuồng. Có thể nuôi ao hoặc nơi ẩm ướt. Tạo tổ đẻ cho vịt đẻ trứng. Phòng chống thú dữ thiết yếu. Chỗ nghỉ khô ráo.',
    common_diseases: ['duck plague', 'duck viral hepatitis', 'pasteurellosis', 'aspergillosis'],
    vaccination_schedule: {
      required: ['Duck Viral Enteritis', 'Duck Viral Hepatitis', 'Pasteurella'],
      frequency: 'As per regional disease prevalence'
    },
    care_tips_en: 'Provide clean swimming water. Collect eggs early morning. Good for integrated rice-duck farming. Hardy and disease-resistant. Excellent foragers. Can raise for meat (6-8 weeks) or eggs.',
    care_tips_vi: 'Cung cấp nước bơi sạch. Nhặt trứng sáng sớm. Tốt cho mô hình lúa-vịt. Khỏe mạnh và chịu bệnh tốt. Kiếm ăn giỏi. Có thể nuôi lấy thịt (6-8 tuần) hoặc trứng.'
  },
  {
    name_en: 'Quail',
    name_vi: 'Chim cút',
    scientific_name: 'Coturnix coturnix',
    category: 'poultry',
    typical_lifespan_months: 24,
    gestation_period_days: 17,
    feed_requirements_en: 'Commercial quail feed or turkey starter (24-28% protein). 20-25g per bird daily. Small particle size required. Constant access to fresh water. Can supplement with greens.',
    feed_requirements_vi: 'Thức ăn cút thương mại hoặc thức ăn gà tây (24-28% protein). 20-25g mỗi con mỗi ngày. Cần hạt nhỏ. Luôn có nước sạch. Có thể bổ sung rau xanh.',
    housing_requirements_en: 'Cage system most common - 50-60 birds per m². Battery cages or floor pens. Temperature 18-25°C optimal. 14-16 hours light for layers. Good ventilation crucial. Quiet environment needed.',
    housing_requirements_vi: 'Nuôi lồng phổ biến nhất - 50-60 con/m². Lồng tầng hoặc chuồng sàn. Nhiệt độ 18-25°C tối ưu. Chiếu sáng 14-16 giờ cho cút đẻ. Thông gió tốt rất quan trọng. Cần môi trường yên tĩnh.',
    common_diseases: ['quail bronchitis', 'ulcerative enteritis', 'coccidiosis', 'aspergillosis'],
    vaccination_schedule: {
      required: ['Newcastle Disease (optional)', 'Fowl Pox (optional)'],
      frequency: 'Usually disease prevention through hygiene'
    },
    care_tips_en: 'Start laying at 6-7 weeks. Very productive (280-300 eggs/year). Harvest meat birds at 5-6 weeks. Extremely sensitive to disturbance. Maintain 60-70% humidity. Egg production drops after 12 months.',
    care_tips_vi: 'Bắt đầu đẻ ở 6-7 tuần. Rất năng suất (280-300 trứng/năm). Thu hoạch thịt ở 5-6 tuần. Rất nhạy cảm với tiếng động. Duy trì độ ẩm 60-70%. Năng suất đẻ giảm sau 12 tháng.'
  },

  // SWINE (Lợn/heo)
  {
    name_en: 'Pig (Breeding Sow)',
    name_vi: 'Lợn nái',
    scientific_name: 'Sus scrofa domesticus',
    category: 'swine',
    typical_lifespan_months: 60,
    gestation_period_days: 114,
    feed_requirements_en: 'Pregnant sows: 2-2.5 kg/day balanced feed. Lactating sows: 4-6 kg/day high-protein feed. Gestation feed (12-14% protein), lactation feed (16-18% protein). Fresh water always available.',
    feed_requirements_vi: 'Lợn nái mang thai: 2-2.5 kg/ngày thức ăn cân đối. Lợn nái cho con bú: 4-6 kg/ngày thức ăn giàu protein. Thức ăn mang thai (12-14% protein), thức ăn cho bú (16-18% protein). Luôn có nước sạch.',
    housing_requirements_en: 'Individual stalls during gestation (2m x 0.6m). Farrowing crates for birthing (2.2m x 1.7m). Group housing acceptable. Clean, dry bedding. Temperature 18-22°C. Separate areas for piglets with heat lamps.',
    housing_requirements_vi: 'Chuồng riêng khi mang thai (2m x 0.6m). Chuồng đẻ (2.2m x 1.7m). Có thể nuôi nhóm. Nền khô sạch. Nhiệt độ 18-22°C. Khu vực riêng cho lợn con với đèn sưởi.',
    common_diseases: ['swine fever', 'foot and mouth disease', 'porcine reproductive respiratory syndrome (PRRS)', 'swine dysentery'],
    vaccination_schedule: {
      required: ['Classical Swine Fever', 'FMD', 'Parvovirus', 'Erysipelas'],
      frequency: 'Swine Fever every 6 months, FMD every 6 months, others annually'
    },
    care_tips_en: 'Wean piglets at 21-28 days. Expect 2.2-2.4 litters per year. 10-12 piglets per litter average. Monitor body condition - not too fat or thin. Provide farrowing supervision. Clean and disinfect between batches.',
    care_tips_vi: 'Cai sữa lợn con ở 21-28 ngày. Dự kiến 2.2-2.4 lứa/năm. Trung bình 10-12 con/lứa. Theo dõi thể trạng - không quá béo hoặc gầy. Giám sát khi đẻ. Vệ sinh khử trùng giữa các lứa.'
  },
  {
    name_en: 'Pig (Fattening)',
    name_vi: 'Lợn thịt',
    scientific_name: 'Sus scrofa domesticus',
    category: 'swine',
    typical_lifespan_months: 6,
    gestation_period_days: 114,
    feed_requirements_en: 'Starter feed (18-20% protein) for 20-30 kg pigs. Grower feed (16-18%) for 30-60 kg. Finisher feed (14-16%) for 60-100 kg. Feed freely or restricted. 2-3 kg per day at finishing.',
    feed_requirements_vi: 'Thức ăn khởi đầu (18-20% protein) cho lợn 20-30 kg. Thức ăn phát triển (16-18%) cho 30-60 kg. Thức ăn vỗ béo (14-16%) cho 60-100 kg. Cho ăn tự do hoặc định lượng. 2-3 kg/ngày lúc vỗ béo.',
    housing_requirements_en: 'Group housing with 0.8-1.2 m² per pig. Slatted or solid floor with drainage. Separate feeding and resting areas. Temperature 15-25°C. Good ventilation essential. Provide toys to prevent fighting.',
    housing_requirements_vi: 'Nuôi nhóm 0.8-1.2 m²/con. Sàn hở hoặc kín có thoát nước. Tách khu vực ăn và nghỉ. Nhiệt độ 15-25°C. Thông gió tốt thiết yếu. Cho đồ chơi tránh cắn nhau.',
    common_diseases: ['swine fever', 'foot and mouth disease', 'pneumonia', 'diarrhea', 'skin diseases'],
    vaccination_schedule: {
      required: ['Classical Swine Fever', 'FMD'],
      frequency: 'As per local regulations and disease prevalence'
    },
    care_tips_en: 'Target 700-900g daily weight gain. Market at 90-110 kg live weight (5-6 months). Castrate males at 1-2 weeks. Maintain strict hygiene. All-in-all-out system best. Monitor for respiratory issues.',
    care_tips_vi: 'Mục tiêu tăng 700-900g/ngày. Xuất chuồng ở 90-110 kg sống (5-6 tháng). Thiến đực ở 1-2 tuần tuổi. Giữ vệ sinh nghiêm ngặt. Tốt nhất nuôi theo lứa. Theo dõi bệnh hô hấp.'
  },

  // AQUACULTURE (Thủy sản)
  {
    name_en: 'Tilapia',
    name_vi: 'Cá rô phi',
    scientific_name: 'Oreochromis niloticus',
    category: 'aquaculture',
    typical_lifespan_months: 24,
    gestation_period_days: 28,
    feed_requirements_en: 'Commercial fish pellets with 28-32% protein. Feed 3-5% of body weight daily in 2-3 portions. Reduce to 2-3% as fish grow. Can supplement with agricultural by-products. Adjust based on water temperature.',
    feed_requirements_vi: 'Thức ăn viên thương mại 28-32% protein. Cho ăn 3-5% trọng lượng thân mỗi ngày chia 2-3 lần. Giảm xuống 2-3% khi cá lớn. Có thể bổ sung phụ phẩm nông nghiệp. Điều chỉnh theo nhiệt độ nước.',
    housing_requirements_en: 'Earthen ponds 1000-3000 m² ideal. Stock 3-5 fish per m² in monoculture. Depth 1-1.5m. Maintain dissolved oxygen >4 ppm. Water temperature 25-30°C optimal. Weekly water exchange 10-20%.',
    housing_requirements_vi: 'Ao đất 1000-3000 m² lý tưởng. Thả 3-5 con/m² nuôi thuần. Độ sâu 1-1.5m. Duy trì oxy hoà tan >4 ppm. Nhiệt độ nước 25-30°C tối ưu. Thay nước 10-20% hàng tuần.',
    common_diseases: ['columnaris', 'streptococcosis', 'aeromonas infection', 'parasitic infestations'],
    vaccination_schedule: {
      required: ['Streptococcus (in endemic areas)'],
      frequency: 'Usually disease prevention through water quality management'
    },
    care_tips_en: 'Fast-growing, harvest at 500-800g in 6 months. Very hardy and disease-resistant. Breeds readily - use all-male culture for uniform growth. Monitor water quality daily. Aerate during hot weather or low oxygen.',
    care_tips_vi: 'Sinh trưởng nhanh, thu hoạch ở 500-800g trong 6 tháng. Rất khỏe và chịu bệnh tốt. Sinh sản dễ - dùng nuôi cá đực cho tăng trưởng đều. Kiểm tra chất lượng nước hàng ngày. Sục khí khi nóng hoặc thiếu oxy.'
  },
  {
    name_en: 'Catfish (Tra/Basa)',
    name_vi: 'Cá tra',
    scientific_name: 'Pangasius bocourti',
    category: 'aquaculture',
    typical_lifespan_months: 24,
    gestation_period_days: 0,
    feed_requirements_en: 'High-protein commercial pellets (28-34% protein). Feed 2-4% of body weight daily. Multiple small feedings better than one large. Floating or slow-sinking pellets preferred. Monitor feeding to avoid waste.',
    feed_requirements_vi: 'Viên thức ăn thương mại giàu protein (28-34%). Cho ăn 2-4% trọng lượng thân mỗi ngày. Cho ăn nhiều lần nhỏ tốt hơn một lần lớn. Ưu tiên viên nổi hoặc chìm chậm. Theo dõi cho ăn tránh lãng phí.',
    housing_requirements_en: 'Deep ponds (2-4m) or cages in rivers. Stock density 20-50 fish per m³. Requires good water flow. Dissolved oxygen >3.5 ppm essential. Temperature 26-30°C. Intensive aeration needed for high stocking.',
    housing_requirements_vi: 'Ao sâu (2-4m) hoặc lồng trên sông. Mật độ 20-50 con/m³. Cần dòng nước chảy tốt. Oxy hoà tan >3.5 ppm thiết yếu. Nhiệt độ 26-30°C. Cần sục khí mạnh khi thả dày.',
    common_diseases: ['hemorrhagic septicemia', 'columnaris', 'white spot disease', 'gill rot'],
    vaccination_schedule: {
      required: ['Bacterial vaccines (available in some regions)'],
      frequency: 'Prevention through biosecurity and water quality'
    },
    care_tips_en: 'Grow to 800-1200g in 6-8 months. Major export species. Sensitive to water quality. Grade by size every 2 months. Harvest selectively or as batch. Withhold feed 24 hours before harvest.',
    care_tips_vi: 'Lớn đến 800-1200g trong 6-8 tháng. Loài xuất khẩu chính. Nhạy cảm với chất lượng nước. Phân loại theo kích thước mỗi 2 tháng. Thu hoạch chọn lọc hoặc theo lứa. Ngừng cho ăn 24 giờ trước thu hoạch.'
  },
  {
    name_en: 'Shrimp (White Leg)',
    name_vi: 'Tôm thẻ chân trắng',
    scientific_name: 'Litopenaeus vannamei',
    category: 'aquaculture',
    typical_lifespan_months: 6,
    gestation_period_days: 0,
    feed_requirements_en: 'High-protein shrimp pellets (35-40% protein). Feed 3-5% of biomass daily in 3-4 portions. Reduce feeding if uneaten feed present. Supplement with probiotics. Feed quality critical for health.',
    feed_requirements_vi: 'Viên thức ăn tôm giàu protein (35-40%). Cho ăn 3-5% sinh khối mỗi ngày chia 3-4 lần. Giảm thức ăn nếu còn thừa. Bổ sung men vi sinh. Chất lượng thức ăn quan trọng cho sức khỏe.',
    housing_requirements_en: 'Lined ponds or biofloc systems. Stock 60-150 PL/m² depending on system. Depth 1.2-1.5m. Maintain salinity 15-30 ppt. Dissolved oxygen >5 ppm. Intensive aeration and water exchange crucial.',
    housing_requirements_vi: 'Ao lót hoặc hệ thống biofloc. Thả 60-150 PL/m² tùy hệ thống. Độ sâu 1.2-1.5m. Duy trì độ mặn 15-30 ppt. Oxy hoà tan >5 ppm. Sục khí và thay nước rất quan trọng.',
    common_diseases: ['white spot syndrome', 'early mortality syndrome', 'vibriosis', 'black gill disease'],
    vaccination_schedule: {
      required: ['None commercially available'],
      frequency: 'Prevention through biosecurity, probiotics, and water quality'
    },
    care_tips_en: 'Harvest at 90-120 days at 20-25g size. Very sensitive to water quality and disease. Use SPF (Specific Pathogen Free) post-larvae. Monitor daily for signs of disease. Strict biosecurity essential. Partial harvests possible.',
    care_tips_vi: 'Thu hoạch sau 90-120 ngày ở kích thước 20-25g. Rất nhạy cảm với chất lượng nước và bệnh. Dùng tôm giống SPF (không mầm bệnh đặc hiệu). Theo dõi hàng ngày dấu hiệu bệnh. An toàn sinh học nghiêm ngặt thiết yếu. Có thể thu hoạch từng phần.'
  },

  // SMALL LIVESTOCK
  {
    name_en: 'Goat',
    name_vi: 'Dê',
    scientific_name: 'Capra aegagrus hircus',
    category: 'other',
    typical_lifespan_months: 144,
    gestation_period_days: 150,
    feed_requirements_en: 'Browse on bushes, shrubs, and weeds. Supplement with hay and concentrate (200-500g daily). Require less quality feed than cattle. Provide mineral licks. Fresh water essential. Good foragers.',
    feed_requirements_vi: 'Ăn cây bụi, cỏ dại. Bổ sung cỏ khô và thức ăn đậm đặc (200-500g/ngày). Cần thức ăn chất lượng thấp hơn bò. Cung cấp đá muối khoáng. Nước sạch thiết yếu. Kiếm ăn giỏi.',
    housing_requirements_en: 'Simple shelter from rain and sun. Raised slatted floor ideal. 2-3 m² per goat. Good ventilation important. Separate kids from does. Can be tethered for grazing. Climbing structures beneficial.',
    housing_requirements_vi: 'Chuồng đơn giản che mưa nắng. Sàn hở cao lý tưởng. 2-3 m² mỗi con. Thông gió tốt quan trọng. Tách dê con ra. Có thể buộc để chăn thả. Giàn leo có lợi.',
    common_diseases: ['pneumonia', 'foot rot', 'enterotoxemia', 'parasites (internal and external)'],
    vaccination_schedule: {
      required: ['PPR (Peste des Petits Ruminants)', 'Enterotoxemia', 'Foot Rot vaccine'],
      frequency: 'PPR annually, others as needed'
    },
    care_tips_en: 'Deworm every 3 months. Trim hooves every 2-3 months. Kids ready to wean at 3 months. Does can kid twice per year. Excellent browsers for vegetation control. Hardy and adaptable to various climates.',
    care_tips_vi: 'Tẩy giun 3 tháng/lần. Cắt móng 2-3 tháng/lần. Dê con cai sữa ở 3 tháng. Dê mẹ có thể đẻ 2 lần/năm. Kiểm soát thực vật tốt. Khỏe mạnh và thích nghi nhiều khí hậu.'
  },
  {
    name_en: 'Rabbit',
    name_vi: 'Thỏ',
    scientific_name: 'Oryctolagus cuniculus',
    category: 'other',
    typical_lifespan_months: 36,
    gestation_period_days: 31,
    feed_requirements_en: 'High-quality hay (70% of diet), pellets (30g per kg body weight), fresh vegetables. Continuous fiber essential for digestive health. Fresh water always. Avoid sudden diet changes.',
    feed_requirements_vi: 'Cỏ khô chất lượng cao (70% khẩu phần), viên (30g/kg trọng lượng), rau tươi. Chất xơ liên tục thiết yếu cho tiêu hóa. Luôn có nước sạch. Tránh đổi thức ăn đột ngột.',
    housing_requirements_en: 'Wire cages 60x60x40cm per rabbit. Solid floor or wire with rest boards. Good ventilation but draft-free. Temperature 15-25°C ideal. Nest boxes for does with litter. Clean cages weekly.',
    housing_requirements_vi: 'Lồng lưới 60x60x40cm mỗi con. Sàn kín hoặc lưới có bản nghỉ. Thông thoáng nhưng không gió lùa. Nhiệt độ 15-25°C lý tưởng. Hộp đẻ cho thỏ mẹ có lót. Vệ sinh lồng hàng tuần.',
    common_diseases: ['pasteurellosis', 'coccidiosis', 'viral hemorrhagic disease', 'myxomatosis', 'ear mites'],
    vaccination_schedule: {
      required: ['Viral Hemorrhagic Disease', 'Myxomatosis (in endemic areas)'],
      frequency: 'VHD every 6-12 months, Myxomatosis every 6 months'
    },
    care_tips_en: 'Breed at 5-6 months age. Litters of 6-10 kits. Wean at 4-6 weeks. Harvest meat rabbits at 2.5-3 months (2-2.5kg). Very prolific - can produce 40-50 offspring per doe yearly. Quiet handling essential.',
    care_tips_vi: 'Phối giống ở 5-6 tháng tuổi. Mỗi lứa 6-10 con. Cai sữa ở 4-6 tuần. Thu hoạch thỏ thịt ở 2.5-3 tháng (2-2.5kg). Rất sinh sản - mỗi thỏ mẹ có thể cho 40-50 con/năm. Xử lý nhẹ nhàng thiết yếu.'
  }
];
