import React from "react";

const LanguageModal = ({
  showLangModal,
  closeLangModal,
  onSelectLanguage,
  selectedLang,
}) => {
  return (
    showLangModal && (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select your language</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeLangModal}
                aria-label="Open language modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="language_list">
                {[
                  { label: "English", value: "english" },
                  { label: "Tamil", value: "tamil" },
                  { label: "Español", value: "espanol" },
                ].map((lang) => (
                  <div
                    key={lang.value}
                    className="language_list_items d-flex align-items-center justify-content-between pb-4"
                  >
                    <p className="language_lable mb-0">{lang.label}</p>
                    <input
                      type="radio"
                      name="siteLang"
                      value={lang.value}
                      className="form-check-input mt-0"
                      onChange={() => onSelectLanguage(lang.value)}
                      checked={selectedLang === lang.value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LanguageModal;
