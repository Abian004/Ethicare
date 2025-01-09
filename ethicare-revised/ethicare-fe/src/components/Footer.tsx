import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 font-bold">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/ethicare_id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/ethicare-initiatives"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:ethicareinitiatives@gmail.com"
            className="text-2xl hover:text-gray-400"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Ethicare Initiatives. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
