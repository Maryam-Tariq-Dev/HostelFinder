document.addEventListener('DOMContentLoaded', () => {
  // Simulated hostel data
  const hostels = [
    {
      name: "Sunrise Hostel",
      location: "Gulshan-e-Iqbal",
      price: "PKR 10,000 - 12,000/month",
      facilities: ["Wi-Fi", "Security", "Food"],
      contact: "0300-1111111",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "CityView Hostel",
      location: "DHA",
      price: "PKR 15,000 - 18,000/month",
      facilities: ["Wi-Fi", "Security", "AC"],
      contact: "0301-2222222",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "GreenLeaf Hostel",
      location: "North Nazimabad",
      price: "PKR 8,000 - 10,000/month",
      facilities: ["Wi-Fi", "Food"],
      contact: "0302-3333333",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "Comfort Inn Hostel",
      location: "Gulistan-e-Jauhar",
      price: "PKR 12,000 - 14,000/month",
      facilities: ["Wi-Fi", "Security", "Laundry"],
      contact: "0303-4444444",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "Metro Hostel",
      location: "Saddar",
      price: "PKR 9,000 - 11,000/month",
      facilities: ["Wi-Fi", "Food", "Security"],
      contact: "0304-5555555",
      image: "ihttps://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "Elite Hostel",
      location: "Clifton",
      price: "PKR 20,000 - 25,000/month",
      facilities: ["Wi-Fi", "Security", "AC", "Food"],
      contact: "0305-6666666",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "BudgetStay Hostel",
      location: "Liaquatabad",
      price: "PKR 7,000 - 9,000/month",
      facilities: ["Wi-Fi", "Security"],
      contact: "0306-7777777",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "HomeAway Hostel",
      location: "PECHS",
      price: "PKR 11,000 - 13,000/month",
      facilities: ["Wi-Fi", "Food"],
      contact: "0307-8888888",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "SafeNest Hostel",
      location: "University Road",
      price: "PKR 10,000 - 11,000/month",
      facilities: ["Wi-Fi", "Security", "Food"],
      contact: "0308-9999999",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    },
    {
      name: "CozyCorner Hostel",
      location: "Bahadurabad",
      price: "PKR 14,000 - 16,000/month",
      facilities: ["Wi-Fi", "AC"],
      contact: "0309-0000000",
      image: "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw="
    }
  ];

  // Pagination variables
  let currentPage = 1;
  const pageSize = 6; // number of listings per page

  const hostelListEl = document.getElementById('hostelList');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const pageInfoEl = document.getElementById('pageInfo');
  const searchInput = document.getElementById('searchInput');

  if (hostelListEl) {
    renderHostels(hostels, currentPage, pageSize);

    // Pagination controls
    prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderHostels(filterHostels(searchInput.value), currentPage, pageSize);
      }
    });

    nextPageBtn.addEventListener('click', () => {
      if (currentPage < Math.ceil(filterHostels(searchInput.value).length / pageSize)) {
        currentPage++;
        renderHostels(filterHostels(searchInput.value), currentPage, pageSize);
      }
    });

    searchInput.addEventListener('input', () => {
      currentPage = 1;
      renderHostels(filterHostels(searchInput.value), currentPage, pageSize);
    });
  }

  function filterHostels(query) {
    if (!query) return hostels;
    query = query.toLowerCase();
    return hostels.filter(h =>
      h.location.toLowerCase().includes(query) ||
      h.price.toLowerCase().includes(query) ||
      h.name.toLowerCase().includes(query)
    );
  }

  function renderHostels(data, page, size) {
    if (!data) return;
    const start = (page - 1) * size;
    const end = start + size;
    const pageHostels = data.slice(start, end);

    hostelListEl.innerHTML = '';
    pageHostels.forEach(h => {
      const facilitiesHtml = h.facilities.map(f => `<span class="facility-icon">${f}</span>`).join(' ');
      hostelListEl.innerHTML += `
        <div class="hostel-card">
          <img src="${h.image}" alt="${h.name}">
          <div class="hostel-card-content">
            <h3>${h.name}</h3>
            <p><strong>Location:</strong> ${h.location}</p>
            <p><strong>Price:</strong> ${h.price}</p>
            <div class="facilities-list">
              ${facilitiesHtml}
            </div>
            <a href="details.html">View Details</a>
          </div>
        </div>
      `;
    });

    // Update pagination controls
    pageInfoEl.textContent = `Page ${page}`;
    prevPageBtn.disabled = page === 1;
    nextPageBtn.disabled = page === Math.ceil(data.length / size);
  }
});
