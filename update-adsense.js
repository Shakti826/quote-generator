// AdSense Update Script for Quote.Io
// Run this in browser console or use to manually update your HTML

// Your AdSense Publisher ID (already updated)
const PUBLISHER_ID = "ca-pub-6962377793734299";

// Replace these with your actual ad slot IDs from AdSense dashboard
const AD_SLOTS = {
    banner: "XXXXXXXXXX",     // Replace with your banner ad slot ID
    sidebar: "XXXXXXXXXX",    // Replace with your sidebar ad slot ID  
    middle: "XXXXXXXXXX",     // Replace with your middle ad slot ID
    bottom: "XXXXXXXXXX"      // Replace with your bottom ad slot ID
};

// Instructions for manual replacement in index.html:
console.log("🎯 AdSense Update Instructions:");
console.log("===============================");
console.log("✅ Publisher ID already updated to:", PUBLISHER_ID);
console.log("");
console.log("📝 Next steps - Replace these in your index.html:");
console.log("");
console.log("1. Banner Ad Slot:");
console.log('   Find: data-ad-slot="XXXXXXXXXX" (first occurrence)');
console.log('   Replace: data-ad-slot="YOUR_BANNER_SLOT_ID"');
console.log("");
console.log("2. Sidebar Ad Slot:");
console.log('   Find: data-ad-slot="XXXXXXXXXX" (second occurrence)');
console.log('   Replace: data-ad-slot="YOUR_SIDEBAR_SLOT_ID"');
console.log("");
console.log("3. Middle Ad Slot:");
console.log('   Find: data-ad-slot="XXXXXXXXXX" (third occurrence)');
console.log('   Replace: data-ad-slot="YOUR_MIDDLE_SLOT_ID"');
console.log("");
console.log("4. Bottom Ad Slot:");
console.log('   Find: data-ad-slot="XXXXXXXXXX" (fourth occurrence)');
console.log('   Replace: data-ad-slot="YOUR_BOTTOM_SLOT_ID"');
console.log("");
console.log("🚀 After updating, deploy to GitHub Pages and start earning!");

// Function to update ad slots (for when you have the actual slot IDs)
function updateAdSlots(bannerSlot, sidebarSlot, middleSlot, bottomSlot) {
    const adUnits = document.querySelectorAll('.adsbygoogle');
    
    if (adUnits.length >= 4) {
        adUnits[0].setAttribute('data-ad-slot', bannerSlot);   // Banner
        adUnits[1].setAttribute('data-ad-slot', sidebarSlot);  // Sidebar
        adUnits[2].setAttribute('data-ad-slot', middleSlot);   // Middle
        adUnits[3].setAttribute('data-ad-slot', bottomSlot);   // Bottom
        
        console.log("✅ All ad slots updated!");
        console.log("🔄 Reinitializing AdSense...");
        
        // Reinitialize AdSense
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

// Example usage (uncomment and replace with your actual slot IDs):
// updateAdSlots("1234567890", "0987654321", "1122334455", "5544332211");