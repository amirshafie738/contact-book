
function SearchList({search, setSort, sort, setSearch, totalContact}){
    return(
        <div className="flex gap-4 mb-5">
        <input
          type="text"
          placeholder="Search Contact..."
          className="input input-bordered flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <span className="text-3xl font-bold text-primary">{totalContact}</span>
      </div>

    )
}

export default SearchList