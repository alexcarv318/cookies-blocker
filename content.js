const sleep = ms => new Promise(r => setTimeout(r, ms));

async function init() {
    await sleep(2_000)

    console.log("Executing DOM manipulation logic...");
    const declineButtons = [
        ...document.querySelectorAll('button, [role="button"], input[type="button"]')
    ];

    const declineTextPatterns = [
        "decline",
        "reject",
        "no thanks",
        "opt-out",
        "disable",
        "deny",
    ];

    declineButtons.forEach((btn) => {
        const text = btn.innerText // || btn.value || btn.getAttribute('aria-label');
        console.log(text)
        if (text && declineTextPatterns.some((pattern) => text.toLowerCase().includes(pattern))) {
            console.log("Found a decline button:", btn);
            btn.click();
        }
    });
}

init();
