import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-3 m-">
      <div className="flex-[1] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3">
          <img src="/front/public/img/p/1.png" alt="ic1" />{' '}
          <button>
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>{' '}
        </div>
        <div className="flex-[1] flex gap-3">
          <img src="/front/public/img/p/2.png" alt="ic2" />{' '}
          <button>
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>{' '}
        </div>
      </div>
      <div className="flex-[1] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3">
          <img src="/front/public/img/p/3.png" alt="ic3" />{' '}
          <button>
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>{' '}
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3">
          <div className="flex-[1] flex flex-col gap-10">
            <div className="flex-[1] flex gap-3">
              <img src="/front/public/img/p/4.png" alt="ic4" />{' '}
              <button>
                <Link className="" to="/products/1">
                  Sale
                </Link>
              </button>{' '}
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-10">
            <div className="flex-[1] flex gap-3">
              <img src="/front/public/img/p/5.png" alt="ic5" />{' '}
              <button>
                <Link className="" to="/products/1">
                  Sale
                </Link>
              </button>{' '}
            </div>
          </div>
        </div>
        <div className="flex-[1] flex gap-3">
          <img src="/front/public/img/p/6.png" alt="ic6" />{' '}
          <button>
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Categories
