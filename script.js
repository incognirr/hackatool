// Tool data remains the same as your original version
const toolsData = [
  {
    category: "IP Grabbers",
    tools: [
      { name: "Grabify", url: "https://grabify.link", icon: "link", safety: {
        level: "safe",
        explanation: "This tool is safe when used responsibly for legitimate purposes."
      }},
      { name: "IPLogger", url: "https://iplogger.org", icon: "log-in", safety: {
        level: "safe",
        explanation: "This tool is safe when used responsibly for legitimate purposes."
      }},
      { name: "ps3CFW.com IP Logger", url: "https://www.ps3cfw.com/iplog.php", icon: "log-in", safety: {
        level: "safe",
        explanation: "This tool is safe when used responsibly for legitimate purposes."
      }},
      { name: "IP-trap", url: "https://ip-trap.com/", icon: "link", safety: {
        level: "safe",
        explanation: "This tool is safe when used responsibly for legitimate purposes."
      }},
      { name: "SpyLink", url: "https://www.spylink.net/", icon: "link", safety: {
        level: "safe",
        explanation: "This tool is safe when used responsibly for legitimate purposes."
      }},
    ],
    icon: "map-pin"
  },
  {
    category: "IP Locators",
    tools: [
      { name: "IP Location", url: "https://iplocation.net", icon: "map-pin", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP geolocation purposes."
      }},
      { name: "IP-Tracker", url: "https://ip-tracker.org", icon: "crosshair", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP tracking and geolocation."
      }},
      { name: "MaxMind", url: "https://www.maxmind.com", icon: "map", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP intelligence and geolocation."
      }},
      { name: "DB-IP", url: "https://db-ip.com", icon: "database", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP database lookups."
      }},
      { name: "IPLocation.io", url: "https://iplocation.io", icon: "map-pin", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP geolocation services."
      }},
      { name: "DNSchecker", url: "https://dnschecker.org/ip-location.php", icon: "check", safety: {
        level: "safe",
        explanation: "This tool is safe to use for DNS and IP location checking."
      }},
      { name: "NordVPN IP Lookup", url: "https://nordvpn.com/ip-lookup/", icon: "shield", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP information lookup."
      }},
      { name: "IP2Location", url: "https://www.ip2location.com/demo", icon: "map", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP geolocation services."
      }},
      { name: "KeyCDN Tools", url: "https://tools.keycdn.com/geo", icon: "key", safety: {
        level: "safe",
        explanation: "This tool is safe to use for IP geolocation lookups."
      }},
    ],
    icon: "navigation"
  },
  {
    category: "DDoS Tools",
    tools: [
      { name: "LOIC", url: "https://sourceforge.net/projects/loic", icon: "zap", safety: {
        level: "unsafe",
        explanation: "This tool may be unsafe and should be used with caution."
      }},
      { name: "Xerxes", url: "https://github.com/dotfighter/torshammer", icon: "zap", safety: {
        level: "warning",
        explanation: "Safety status unknown. Use with caution."
      }},
      { name: "RDDoS Tool", url: "https://github.com/Red-company/RDDoS_Tool", icon: "zap", safety: {
        level: "warning",
        explanation: "Safety status unknown. Use with caution."
      }},
      { name: "DDoSIM", url: "https://github.com/Red-company/RDDoS_Tool", icon: "zap", safety: {
        level: "warning",
        explanation: "Safety status unknown. Use with caution."
      }},
      { name: "Torshammer", url: "https://github.com/dotfighter/torshammer", icon: "zap", safety: {
        level: "warning",
        explanation: "Safety status unknown. Use with caution."
      }},
    ],
    icon: "zap"
  },
  {
    category: "Encryption/Decryption Tools",
    tools: [
      { name: "VeraCrypt", url: "https://veracrypt.fr", icon: "lock", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "OpenSSL", url: "https://www.openssl.org", icon: "lock", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "7-Zip", url: "https://www.7-zip.org", icon: "archive", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "AxCrypt", url: "https://axcrypt.net", icon: "lock", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "GnuPG", url: "https://gnupg.org", icon: "lock", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "TrueCrypt", url: "https://truecrypt.sourceforge.net", icon: "lock", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "lock"
  },
  {
    category: "Data Wipers",
    tools: [
      { name: "Eraser", url: "https://eraser.heidi.ie", icon: "trash-2", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "DBAN (Darik's Boot and Nuke)", url: "https://dban.org", icon: "trash-2", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Active KillDisk", url: "https://www.killdisk.com", icon: "trash-2", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "trash-2"
  },
  {
    category: "Steganography Tools",
    tools: [
      { name: "OpenStego", url: "https://openstego.com", icon: "image", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Steghide", url: "https://steghide.sourceforge.net", icon: "image", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "QuickStego", url: "http://www.quickcrypto.com/free-steganography-software.html", icon: "image", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "image"
  },
  {
    category: "Man-in-the-Middle Tools",
    tools: [
      { name: "Wireshark", url: "https://wireshark.org", icon: "wifi", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Ettercap", url: "https://ettercap.github.io/ettercap", icon: "wifi", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "wifi"
  },
  {
    category: "Network Scanners",
    tools: [
      { name: "Nmap", url: "https://nmap.org", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Angry IP Scanner", url: "https://angryip.org", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "SoftPerfect Network Scanner", url: "https://www.softperfect.com/products/networkscanner", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Advanced IP Scanner", url: "https://www.advanced-ip-scanner.com", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "MyLanViewer", url: "https://www.mylanviewer.com", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "search"
  },
  // ... rest of your toolsData array stays unchanged ...
  {
    category: "Image and Location Tracking Tools",
    tools: [
      { name: "ExifTool", url: "https://exiftool.org", icon: "image", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "ReverseImageSearch", url: "https://reverseimagesearch.org", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "GeoSpy", url: "https://geospy.ai/", icon: "map-pin", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "image"
  },
  {
    category: "Doxing and OSINT Tools",
    tools: [
      { name: "TheHarvester", url: "https://github.com/laramies/theHarvester", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Maltego", url: "https://www.maltego.com", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "OSINT Framework", url: "https://osintframework.com", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "FOCA", url: "https://github.com/ElevenPaths/FOCA", icon: "search", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "search"
  },
  {
    category: "Virtual Phone Services",
    tools: [
      { name: "TextNow", url: "https://textnow.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Pinger", url: "https://pinger.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Burner", url: "https://burnerapp.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Hushed", url: "https://hushed.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "MySudo", url: "https://mysudo.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Twilio", url: "https://twilio.com", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "CallBomber", url: "https://callbomber.xyz/", icon: "phone", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "phone"
  },
  {
    category: "Dark Web Access Tools",
    tools: [
      { name: "Tor Project", url: "https://torproject.org", icon: "globe", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Onion.live", url: "https://onion.live", icon: "globe", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Ahmia.fi", url: "https://ahmia.fi/", icon: "globe", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
      { name: "Tor.taxi", url: "https://tor.taxi/", icon: "globe", safety: {
        level: "safe",
        explanation: "This is a Safe tool, but you should still be cautious"
      }},
    ],
    icon: "globe"
  }
];

// Main function to create the tools grid
function createToolsGrid() {
  const toolsGrid = document.getElementById("tools-grid");
  toolsGrid.innerHTML = "";

  // Create and append each category
  toolsData.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    // Create category header with icon and title
    const categoryHeader = document.createElement("h2");
    const categoryIcon = document.createElement("i");
    categoryIcon.setAttribute("data-feather", category.icon);
    categoryHeader.appendChild(categoryIcon);
    categoryHeader.appendChild(document.createTextNode(` ${category.category}`));
    categoryDiv.appendChild(categoryHeader);

    // Create tools container
    const toolsContainer = document.createElement("div");
    toolsContainer.className = "tools-container";

    // Create and append each tool
    category.tools.forEach((tool) => {
      const toolDiv = document.createElement("div");
      toolDiv.className = "tool";
      
      // Make the entire tool clickable
      toolDiv.onclick = function(e) {
        if (!e.target.closest('.safety-indicator')) {
          window.open(tool.url, '_blank');
        }
      };

      // Create tool content wrapper
      const toolInfoWrapper = document.createElement("div");
      toolInfoWrapper.className = "tool-info-wrapper";

      // Create tool icon
      const toolIcon = document.createElement("div");
      toolIcon.className = "tool-icon";
      const icon = document.createElement("i");
      icon.setAttribute("data-feather", tool.icon || category.icon);
      toolIcon.appendChild(icon);

      // Create tool info section
      const toolInfo = document.createElement("div");
      toolInfo.className = "tool-info";
      const toolName = document.createElement("span");
      toolName.textContent = tool.name;
      toolInfo.appendChild(toolName);

      // Create safety indicator
      const safetyIndicator = document.createElement("div");
      safetyIndicator.className = `safety-indicator ${tool.safety?.level || 'warning'}`;
      
      // Create and append tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "safety-tooltip";
      tooltip.textContent = tool.safety?.explanation || "Safety status unknown";
      safetyIndicator.appendChild(tooltip);

      // Assemble all elements
      toolInfoWrapper.appendChild(toolIcon);
      toolInfoWrapper.appendChild(toolInfo);
      toolInfoWrapper.appendChild(safetyIndicator);
      toolDiv.appendChild(toolInfoWrapper);
      toolsContainer.appendChild(toolDiv);
    });

    categoryDiv.appendChild(toolsContainer);
    toolsGrid.appendChild(categoryDiv);
  });

  // Initialize Feather icons
  feather.replace();
}

function createCategoryTiles() {
  const categoriesContainer = document.querySelector(".categories-scroll");
  categoriesContainer.innerHTML = "";
  
  // Take the first 10 categories for the horizontal scroll
  const displayCategories = toolsData.slice(0, 10);
  
  displayCategories.forEach(category => {
    const categoryTile = document.createElement("div");
    categoryTile.className = "category-tile";
    categoryTile.setAttribute("data-category", category.category.toLowerCase().replace(/\s+/g, "-"));
    
    const icon = document.createElement("i");
    icon.setAttribute("data-feather", category.icon || "folder");
    
    const title = document.createElement("h4");
    title.textContent = category.category;
    
    categoryTile.appendChild(icon);
    categoryTile.appendChild(title);
    
    // Enhanced click event to navigate to tools page and scroll to category with smooth centering
    categoryTile.addEventListener("click", () => {
      const categoryId = category.category.toLowerCase().replace(/\s+/g, "-");
      navigateToCategory(categoryId);
    });
    
    categoriesContainer.appendChild(categoryTile);
  });
  
  feather.replace();
}

// Function to navigate to a specific category
function navigateToCategory(categoryId) {
  // Switch to tools page first
  switchToToolsPage();
  
  // Wait a bit longer for the page transition
  setTimeout(() => {
    const targetCategory = document.querySelector(`#category-${categoryId}`);
    if (targetCategory) {
      targetCategory.classList.add("highlight-pulse");
      
      const rect = targetCategory.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        targetCategory.classList.remove("highlight-pulse");
      }, 2000);
    }
  }, 600); // Increased delay to ensure page transition is complete
}

function setupViewToggle() {
  const viewToggle = document.getElementById("view-toggle");
  const toolsGrid = document.getElementById("tools-grid");
  const views = ["grid-view", "list-view", "full-view"];
  let currentViewIndex = 0;

  viewToggle.addEventListener("click", () => {
    currentViewIndex = (currentViewIndex + 1) % views.length;
    
    // Remove all view classes
    views.forEach(view => toolsGrid.classList.remove(view));
    
    // Add current view class with animation
    toolsGrid.classList.add(views[currentViewIndex], "view-transition");
    
    // Remove transition class after animation completes
    setTimeout(() => {
      toolsGrid.classList.remove("view-transition");
    }, 500);
    
    updateViewToggleIcon();
  });

  function updateViewToggleIcon() {
    const icon = viewToggle.querySelector("i");
    icon.setAttribute("data-feather", currentViewIndex === 0 ? "grid" : currentViewIndex === 1 ? "list" : "maximize");
    feather.replace();
  }
  
  // Initialize with grid view
  toolsGrid.classList.add("grid-view");
}

// Initialize search functionality
function initializeSearch() {
  const searchInput = document.getElementById("tools-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const searchTerm = this.value.toLowerCase();
      const tools = document.querySelectorAll(".tool");
      
      tools.forEach(tool => {
        const toolName = tool.querySelector(".tool-info span").textContent.toLowerCase();
        const category = tool.closest(".category");
        
        if (toolName.includes(searchTerm)) {
          tool.style.display = "block";
          if (category) category.style.display = "block";
        } else {
          tool.style.display = "none";
          // Hide empty categories
          if (category && !Array.from(category.querySelectorAll(".tool")).some(t => t.style.display === "block")) {
            category.style.display = "none";
          }
        }
      });
    });
  }
}

function switchToToolsPage() {
  const homePage = document.getElementById("home-page");
  const toolsPage = document.getElementById("tools-page");
  const navLinks = document.querySelectorAll("nav a");
  
  // Create tools grid before switching pages
  createToolsGrid();
  
  homePage.classList.remove("active");
  toolsPage.classList.add("active");
  
  // Add page transition animation
  toolsPage.classList.add("page-enter");
  setTimeout(() => {
    toolsPage.classList.remove("page-enter");
  }, 500);
  
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-page") === "tools");
  });
}

function setupNavigation() {
  const navLinks = document.querySelectorAll("nav a");
  const pages = document.querySelectorAll(".page");
  const viewDatabaseBtn = document.getElementById("view-database-btn");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-page");
      
      // Special handling for contact link
      if (targetPage === "contact") {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
      
      pages.forEach((page) => {
        if (page.id === `${targetPage}-page`) {
          page.classList.add("active", "page-enter");
          setTimeout(() => {
            page.classList.remove("page-enter");
          }, 500);
        } else {
          page.classList.remove("active");
        }
      });
      
      navLinks.forEach((navLink) => {
        navLink.classList.toggle("active", navLink === link);
      });
    });
  });
  
  // Set up the View Tool Database button
  viewDatabaseBtn.addEventListener("click", () => {
    switchToToolsPage();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Get the header contact link
  const headerContactLink = document.querySelector('header nav a:last-child');
  
  if (headerContactLink) {
    // Update the href
    headerContactLink.href = '/#contact';
    
    // Add click handler
    headerContactLink.addEventListener('click', (e) => {
      // Always navigate to home page contact section
      if (window.location.pathname !== '/') {
        window.location.href = '/#contact';
      } else {
        // If on home page, smooth scroll
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  createToolsGrid();
  createCategoryTiles();
  setupViewToggle();
  initializeSearch();
  setupNavigation();
  feather.replace();
  
  // Add initial animation to search bar
  setTimeout(() => {
    const searchContainer = document.querySelector(".tools-search-container");
    searchContainer.classList.add("search-appear");
  }, 300);

  // Function to format numbers with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Example values for visits and tools
  let visits = localStorage.getItem('visitCount') || 0;
  let tools = 10; // Replace with actual tool count

  // Update the stats on page load
  visits++;
  localStorage.setItem('visitCount', visits);

  // Update the displayed values
  document.querySelector('#visit-number').textContent = formatNumber(visits);
  document.querySelector('#tool-number').textContent = formatNumber(tools);
});

document.addEventListener('mousemove', (e) => {
  const tools = document.querySelectorAll('.tool');
  tools.forEach(tool => {
    const rect = tool.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / tool.offsetWidth) * 100;
    const y = ((e.clientY - rect.top) / tool.offsetHeight) * 100;
    tool.style.setProperty('--x', `${x}%`);
    tool.style.setProperty('--y', `${y}%`);
  });
});
